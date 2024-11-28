import { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head';

import { MainContainer } from '../styledComponents/main'

import { AllInfoContainer, CityContainer } from '../styledComponents/city'

import { api } from '../services/api'
import { useToast } from '../context/toastContext'

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
import { DefaultText } from '../components/DefaultText';
import { NewsContainer } from '../styledComponents/news';
import axios from 'axios';

interface A extends HTMLDivElement{
  contains: (target: EventTarget | null) => boolean
}

const Home: NextPage = () => {
  const [currentCity, setCurrentCity] = useState<City>({} as City);
  const [cities, setCities] = useState<BaseCity[]>([]);

  const [searchValue, setSearchValue] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [data, setData] = useState("");

  const dropdownRef = useRef<A>(null);

  const { addToast } = useToast();

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

  useEffect(()=>{
    const getData = async() =>{
      const { data } = await axios.get("/api/news", { 
        params: {
          q: "clima",
          gl: "co"
      } })

      setData(JSON.stringify(data));
    }
    
    getData()
  },[])

  const handleSearch = async() =>{
    if(!searchValue) return;

    try{
      setIsSubmiting(true);
      const response = await api.get(`/geo/1.0/direct?q=${searchValue}&limit=20&appid=${process.env.NEXT_PUBLIC_API_KEY}`);
      if(response.data.length === 0) throw new Error("No cities were found");

      addToast({ type: 'success', title: 'Cities search', message:`Your search found ${response.data.length} citie(s)!` });
      setCities(response.data);
      setIsDropDownOpen(true);
    }catch(err: any){
      if(err?.message === "No cities were found"){
        addToast({ type: 'warning', title: 'Cities search', message:'Sorry, we couldn\'t find any cities.' })
      }else{
        addToast({ type: 'error', title: 'Cities search', message:'Sorry, something went wrong.' })
      }
    }finally{
      setIsSubmiting(false);
    }
  }

  const fetchCity = async(city: BaseCity) =>{
    const { lat, lon } = city;

    try{
      setIsSubmiting(true);
      
      //const response = await api.get(`/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=${process.env.NEXT_PUBLIC_ONE_CALL_API_KEY}`);
      const response = await api.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=${process.env.NEXT_PUBLIC_ONE_CALL_API_KEY}`);
      if(response.data.length === 0) throw new Error("Could not find city data.");
      
      setCurrentCity({ ...response.data, ...city });
      setIsDropDownOpen(false);

      addToast({ type: 'success', title: 'City search', message:`Data found sucessfully!` });
    }catch(err: any){
      if(err?.message === "Could not find city data."){
        addToast({ type: 'warning', title: 'City', message:'Sorry, we couldn\'t fetch the data.' })
      }else{
        addToast({ type: 'error', title: 'City search', message:'Sorry, something went wrong.' })
      }
    }finally{
      setIsSubmiting(false);
    }
  }
  
  return (
    <MainContainer>
      <Head>
        <title>e.forecast</title>
      </Head>

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
      
      { Object.keys(currentCity).length === 0 &&  
        !(cities.length !== 0 && isDropDownOpen) &&
        <DefaultText/> 
      }
      
      { Object.keys(currentCity).length !== 0 &&
        <CityContainer>
          <NewsContainer>
            {data}
          </NewsContainer>
          
          <AllInfoContainer>
            <MainInfo city={currentCity}/>
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
