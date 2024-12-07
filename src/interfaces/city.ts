// This interface defines the complete structure of city weather data
// It extends BaseCity and includes detailed weather information from OpenWeatherMap API
import { BaseCity } from './baseCity'


export interface City extends BaseCity {
  // Geographical coordinates
  coord: {
    lon: number;
    lat: number;
  };
  // Weather conditions array with descriptions and icons
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  // Main weather measurements including temperature and atmospheric conditions
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  // Visibility distance in meters
  visibility: number;
  // Wind conditions including speed, direction and gusts
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  // Rainfall volume for last hour
  rain: {
    "1h": number;
  };
  // Cloud coverage percentage
  clouds: {
    all: number;
  };
  // Time of data calculation, unix, UTC
  dt: number;
  // System parameters including sunrise/sunset times
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  // Shift in seconds from UTC
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
