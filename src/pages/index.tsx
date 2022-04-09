import { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next'

import { MainContainer } from '../styledComponents/main'

import { AllInfoContainer, CityContainer, MainInfoContainer } from '../styledComponents/city'

import { api } from '../services/api'

import { Header } from '../components/Header';
import { Dropdown } from '../components/Dropdown';
import { Uv } from '../components/Uv';
import { Wind } from '../components/Wind'
import { Sun } from '../components/Sun';
import { Pressure } from '../components/Pressure';
import { Rain } from '../components/Rain';
import { Visibility } from '../components/Visibility';
import { Feels } from '../components/Feels';
import { Humidity } from '../components/Humidity';

import { BaseCity } from '../interfaces/baseCity'
import { City } from '../interfaces/city'
import { MainInfo } from '../components/MainInfo';

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
  }
  
  return (
    <MainContainer>
      <Header
        onSearch={handleSearch}
        setSearchValue={setSearchValue}
        setIsDropDownOpen={setIsDropDownOpen}
        isSubmiting={isSubmiting}
      />

      <Dropdown
        cities={cities}
        getCity={fetchCity}
        ref={dropdownRef}
        isVisible={cities.length !== 0 && isDropDownOpen}
      />
      
      { Object.keys(currentCity).length !== 0 &&
        <CityContainer>
          <MainInfo city={currentCity}/>
          
          <AllInfoContainer>
            <Uv city={currentCity}/>
            <Wind city={currentCity}/>
            <Sun city={currentCity}/>
            <Pressure city={currentCity}/>
            <Rain city={currentCity}/>
            <Visibility city={currentCity}/>
            <Feels city={currentCity}/>
            <Humidity city={currentCity}/>
          </AllInfoContainer>
        </CityContainer>
      }
    </MainContainer> 
  )
}

export default Home
