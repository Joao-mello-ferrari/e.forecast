import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Logo, Label, Input, IconContainer, LoaderContainer } from '../components/header'
import { DropDownContainer } from '../components/dropdown'
import { FiSearch } from "react-icons/fi";
import { PuffLoader	 } from "react-spinners";

import { api } from '../services/api'
import styles from '../styles/Home.module.css'
import { KeyboardEventHandler, useState } from 'react';

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);


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
    <DropDownContainer>
      <div style={{width: '100%'}}>

      <div style={{width: '100%', height: '10vh', background: '#666', color: 'white', marginTop: '1rem'}}>ola, teste de componente</div>
      <div style={{width: '100%', height: '10vh', background: '#666', color: 'white', marginTop: '1rem'}}>ola, teste de componente</div>
      <div style={{width: '100%', height: '10vh', background: '#666', color: 'white', marginTop: '1rem'}}>ola, teste de componente</div>
      <div style={{width: '100%', height: '10vh', background: '#666', color: 'white', marginTop: '1rem'}}>ola, teste de componente</div>
      <div style={{width: '100%', height: '10vh', background: '#666', color: 'white', marginTop: '1rem'}}>ola, teste de componente</div>
      <div style={{width: '100%', height: '10vh', background: '#666', color: 'white', marginTop: '1rem'}}>ola, teste de componente</div>
      <div style={{width: '100%', height: '10vh', background: '#666', color: 'white', marginTop: '1rem'}}>ola, teste de componente</div>
      <div style={{width: '100%', height: '10vh', background: '#666', color: 'white', marginTop: '1rem'}}>ola, teste de componente</div>
      </div>
    </DropDownContainer>
    
    </> 
  )
}

export default Home
