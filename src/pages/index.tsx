import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Logo, Label, Input, IconContainer, LoaderContainer } from '../components/header'
import { DropDownContainer, DropDownItem } from '../components/dropdown'
import { FiSearch,FiMapPin } from "react-icons/fi";
import { PuffLoader	 } from "react-spinners";

import { api } from '../services/api'
import styles from '../styles/Home.module.css'
import { KeyboardEventHandler, useState } from 'react';

interface BaseCity{
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

const Home: NextPage = () => {
  const [cities, setCities] = useState<BaseCity[]>([]);

  const [searchValue, setSearchValue] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [hasSubmited, setHasSubmited] = useState(false);


  const test = async() =>{
    const lat = process.env.NEXT_PUBLIC_DEFAULT_LAT;
    const lon = process.env.NEXT_PUBLIC_DEFAULT_LON;
    const key = process.env.NEXT_PUBLIC_API_KEY;
    
    const json = await api.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
    console.log(json)
  }
  // test()


  const get = async() =>{
    // const response = await api.get('/data/2.5/find?&q=rio%20grande&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02')
    const response = await api.get('/data/2.5/find?&q=rio%20grande&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02')
    console.log(response.data)
  }

  const handleSearch = async() =>{
    setIsSubmiting(true);
    const response = await api.get(`/geo/1.0/direct?q=${searchValue}&limit=20&appid=${process.env.NEXT_PUBLIC_API_KEY}`)

    console.log(response.data)
    setCities(response.data)
    setIsSubmiting(false);
  }

  const checkIfShouldSubmit:KeyboardEventHandler<HTMLInputElement> = async(e) =>{
    if(e.key != 'Enter') return
    return handleSearch();
  }

  return (
    <>
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
        />
        { isSubmiting &&
          <LoaderContainer>
            <PuffLoader	size={20} color="#000C2C"/>
          </LoaderContainer>
        }
      </Label>
      
    </Header>
    { cities.length !== 0 &&
      <DropDownContainer>
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
              <div className="map-icon">
                <FiMapPin/>
                <span>See on map</span>
              </div>
            </DropDownItem>
          )
        })

        }
          
      </DropDownContainer>
    }
    
    </> 
  )
}

export default Home
