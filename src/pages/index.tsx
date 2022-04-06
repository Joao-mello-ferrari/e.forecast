import { KeyboardEventHandler, useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'

import { MainContainer } from '../components/main'
import { Header, Logo, Label, Input, IconContainer, LoaderContainer } from '../components/header'
import { DropDownContainer, DropDownItem } from '../components/dropdown'
import { AllInfoContainer, CityContainer, MainInfoContainer } from '../components/city'

import { FiSearch,FiMapPin } from "react-icons/fi";
import { PuffLoader	 } from "react-spinners";

import { api } from '../services/api'
// import styles from '../styles/Home.module.css'

interface BaseCity{
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

interface City extends BaseCity{
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
  daily: {
    temp: {
      min: number;
      max: number;
    }
  }[]; 
}

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
  }

  const checkIfShouldSubmit:KeyboardEventHandler<HTMLInputElement> = async(e) =>{
    if(e.key != 'Enter') return
    return handleSearch();
  }
console.log(currentCity)
  return (
    <MainContainer>
      <Header>
        <Logo>e.forecast</Logo>
        <Label>
          <IconContainer onClick={handleSearch}>
            <FiSearch height={12} width={12}/>
          </IconContainer>
          <Input
            placeholder='Search for your city'
            onKeyDown={checkIfShouldSubmit}
            onChange={e=>setSearchValue(e.target.value)}
            onFocus={e=>setIsDropDownOpen(true)}
          />
          { isSubmiting &&
            <LoaderContainer>
              <PuffLoader	size={20} color="#000C2C"/>
            </LoaderContainer>
          }
        </Label>
        
      </Header>
      { cities.length !== 0 && isDropDownOpen &&
        <DropDownContainer ref={dropdownRef}>
          { cities.map((city,index)=>{
            return(
              <DropDownItem key={index} onClick={()=>fetchCity(city)}>
                <div className="country-image-container">
                  <Image 
                    src={`https://countryflagsapi.com/svg/${city.country}`} 
                    objectFit="cover" 
                    width={142} 
                    height={100} 
                    alt={city.name} 
                  />
                </div>
                <div className="country-info-container">
                  <span className="city-name">{city.name}</span>
                  <span className="city-area">{city.state}, {city.country}</span>
                </div>
                <a 
                  className="map-icon" 
                  href={`https://maps.google.com/?q=${city.lat},${city.lon}`} 
                  target='_blank'
                  rel="noreferrer"
                >
                  <FiMapPin/>
                  <span>See on map</span>
                </a>
              </DropDownItem>
            )
          })
          }
            
        </DropDownContainer>
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
          </MainInfoContainer>
          <AllInfoContainer>
            <div style={{background: '#000000', height: '8rem'}}>as</div>
            <div style={{background: '#000000', height: '8rem'}}>asasa</div>
            <div style={{background: '#000000', height: '8rem'}}>sasas</div>
            <div style={{background: '#000000', height: '8rem'}}>as</div>
            <div style={{background: '#000000', height: '8rem'}}>asasa</div>
            <div style={{background: '#000000', height: '8rem'}}>sasas</div>
            <div style={{background: '#000000', height: '8rem'}}>as</div>
            <div style={{background: '#000000', height: '8rem'}}>asasa</div>
            <div style={{background: '#000000', height: '8rem'}}>sasas</div>
          </AllInfoContainer>
        </CityContainer>
      }
    </MainContainer> 
  )
}

export default Home
