// This is the main page of a weather forecast application that displays weather information and related news for searched cities.
// It includes features like city search, weather details display, and news fetching based on the city's location.

import { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head';

import { MainContainer } from '../styledComponents/main'
import { AllInfoContainer, CityContainer } from '../styledComponents/city'
import { api } from '../services/api'
import { useToast } from '../context/toastContext'

// Import all weather information components
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

import { AllNewsContainer, NewsContainer } from '../styledComponents/news';
import { NewsItem } from '../components/News';

import axios from 'axios';

interface A extends HTMLDivElement{
  contains: (target: EventTarget | null) => boolean
}

const Home: NextPage = () => {
  // State management for city data and UI controls
  const [currentCity, setCurrentCity] = useState<City>({} as City);
  const [cities, setCities] = useState<BaseCity[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [news, setNews] = useState([]);

  const dropdownRef = useRef<A>(null);
  const { addToast } = useToast();

  // Handle click outside dropdown to close it
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

  // Fetch news based on city's country and language
  useEffect(() => {
    const fetchTranslation = async () => {
      const country = currentCity.sys?.country;
      console.log(country);
      const locale = new Intl.Locale('und', { region: country });
      const maximizedLocale = locale.maximize();
      console.log(maximizedLocale.language);

      const translationResponse = await axios.get("/api/translation", {
        params: {
          language: maximizedLocale.language,
        }
      });

      const translation = translationResponse.data.translations[0].translated[0];
      console.log(translation);

      return translation;
    };

    const fetchNews = async (translation) => {
      const country = currentCity.sys?.country;
      const { data } = await axios.get("/api/news", {
        params: {
          q: translation,
          gl: country,
        }
      });

      const newsResults = data.news_results.map(result => ({
        title: result.title,
        link: result.link,
        thumbnail: result.thumbnail_small || '/default_icon.png'
      })).slice(0, 20);

      setNews(newsResults);
      console.log(newsResults);
    };

    const getData = async () => {
      const translation = await fetchTranslation();
      await fetchNews(translation);
    };

    getData();
  }, [currentCity]);

  // Handle city search functionality
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

  // Fetch detailed weather information for selected city
  const fetchCity = async(city: BaseCity) =>{
    const { lat, lon } = city;

    try{
      setIsSubmiting(true);
      
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
  
  // Render the main application UI
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
      
      {/* Show default text when no city is selected */}
      { Object.keys(currentCity).length === 0 &&  
        !(cities.length !== 0 && isDropDownOpen) &&
        <DefaultText/> 
      }
      
      {/* Display weather information and news when a city is selected */}
      { Object.keys(currentCity).length !== 0 &&
        <CityContainer>
          <AllNewsContainer>
            {news.map((news: any, index: number) => (
              <NewsItem key={index} news={news} />
            ))}
          </AllNewsContainer>
          
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
