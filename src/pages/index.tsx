import { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'

import { MainContainer } from '../styledComponents/main'

import { AllInfoContainer, CityContainer, MainInfoContainer } from '../styledComponents/city'


import { api } from '../services/api'
// import styles from '../styles/Home.module.css'


import { Sun } from '../components/Sun';
import { Uv } from '../components/Uv';
import { Wind } from '../components/Wind'
import { Header } from '../components/Header';
import { Dropdown } from '../components/Dropdown';

import { BaseCity } from '../interfaces/baseCity'
import { City } from '../interfaces/city'
import { Pressure } from '../components/Pressure';
import { Rain } from '../components/Rain';

interface A extends HTMLDivElement{
  contains: (target: EventTarget | null) => boolean
}

const Home: NextPage = () => {
  const [currentCity, setCurrentCity] = useState<City>({} as City);
  const [cities, setCities] = useState<BaseCity[]>([]);

  const [searchValue, setSearchValue] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [hasSubmited, setHasSubmited] = useState(false);

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropdownRef = useRef<A>(null);


  useEffect(()=>{
    function checkIfClicked(e: MouseEvent){
      if(!dropdownRef.current) return;
      if(!dropdownRef.current.contains(e.target)) setIsDropDownOpen(false);
    }
    document.addEventListener('mousedown', checkIfClicked);
    
    return ()=>{
      document.removeEventListener('mousedown', checkIfClicked);
    }

  })

  const handleSearch = async() =>{
    if(!searchValue) return;

    setIsSubmiting(true);
    const response = await api.get(`/geo/1.0/direct?q=${searchValue}&limit=20&appid=${process.env.NEXT_PUBLIC_API_KEY}`);

    console.log(response.data)
    setCities(response.data)
    setIsSubmiting(false);
    setIsDropDownOpen(true);
    setHasSubmited(true);
  }

  const fetchCity = async(city: BaseCity) =>{
    const { lat, lon } = city;
    const response = await api.get(`/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`);
    setCurrentCity({ ...response.data, ...city });
    setIsDropDownOpen(false);
    console.log({ ...response.data, ...city })
  }

  return (
    <MainContainer>
      <Header
        onSearch={handleSearch}
        setSearchValue={setSearchValue}
        setIsDropDownOpen={setIsDropDownOpen}
        isSubmiting={isSubmiting}
      />

      { cities.length !== 0 && isDropDownOpen &&
        <Dropdown
          cities={cities}
          getCity={fetchCity}
          ref={dropdownRef}
        />
      }
      
      { Object.keys(currentCity).length !== 0 &&
        <CityContainer>
          <MainInfoContainer>
            <div className="country-info-container">
              <span className="city-name">{currentCity.name}</span>
              <span className="city-area">{currentCity.state}, {currentCity.country}</span>
              <span className="city-temp-range">
                <span className="max">High: {currentCity.daily[0].temp.max} ºC</span><br/>
                <span className="min">Low: {currentCity.daily[0].temp.min} ºC</span>
              </span>
            </div>
            <div className="day-temperature-container">
              <Image 
                src={`https://openweathermap.org/img/wn/${currentCity.current.weather[0].icon}@2x.png`} 
                alt={currentCity.current.weather[0].description}
                objectFit="cover" 
                width={100} 
                height={100} 
              />
              <span>{currentCity.current.weather[0].main}, {Math.round(currentCity.current.temp)} ºC</span>
            </div>
            {/* <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} aria-hidden="false" />
        </div> */}
          </MainInfoContainer>
          
          <AllInfoContainer>
            <Uv city={currentCity}/>
            <Wind city={currentCity}/>
            <Sun city={currentCity}/>
            <Pressure city={currentCity}/>
            <Rain city={currentCity}/>
            <div className='base'></div>
            <div className='base'></div>
            <div className='base'></div>
            <div className='base'></div>
            <div className='base'></div>
            <div className='base'></div>
          </AllInfoContainer>
        </CityContainer>
      }
    </MainContainer> 
  )
}

export default Home
