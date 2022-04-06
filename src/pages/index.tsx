import { KeyboardEventHandler, useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'

import { MainContainer } from '../components/main'
import { Header, Logo, Label, Input, IconContainer, LoaderContainer } from '../components/header'
import { DropDownContainer, DropDownItem } from '../components/dropdown'
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

interface A extends HTMLDivElement{
  contains: (target: EventTarget | null) => boolean
}

const Home: NextPage = () => {
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
    setIsSubmiting(true);
    const response = await api.get(`/geo/1.0/direct?q=${searchValue}&limit=20&appid=${process.env.NEXT_PUBLIC_API_KEY}`)

    console.log(response.data)
    setCities(response.data)
    setIsSubmiting(false);
    setIsDropDownOpen(true);
    setHasSubmited(true);
  }

  const checkIfShouldSubmit:KeyboardEventHandler<HTMLInputElement> = async(e) =>{
    if(e.key != 'Enter') return
    return handleSearch();
  }

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
              <DropDownItem key={index}>
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
    </MainContainer> 
  )
}

export default Home
