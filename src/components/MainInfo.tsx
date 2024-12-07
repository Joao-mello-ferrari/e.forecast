// This component displays the main information about a city including:
// - City name, state, and country
// - Temperature range (high/low)
// - Current weather conditions with icon
// - Embedded Google Maps view of the location
import Image from "next/image";
import { City } from "../interfaces/city"
import { MainInfoContainer } from "../styledComponents/city"

// Props interface defining the city data required
interface MainInfoProps{
  city: City;
}

export const MainInfo = ({ city }: MainInfoProps) =>{
  // Destructure needed values from city data
  const { name, state, country, main, weather, lat, lon } = city;

  return(
    <MainInfoContainer>
      <div className="main-info-container">
        {/* Container for city location details */}
        <div className="country-info-container">
          <span className="city-name">{name}</span>
          <span className="city-area">{!!state ? `${state}, ` : ''} {country}</span>
          {/* Display temperature range */}
          <span className="city-temp-range">
            <span className="max">High: {(main.temp_min).toFixed(1)} ºC</span><br/>
            <span className="min">Low: {(main.temp_max).toFixed(1)} ºC</span>
          </span>
        </div>
        {/* Container for current weather display */}
        <div className="day-temperature-container">
          <Image
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
            alt={weather[0].description}
            objectFit="cover" 
            width={100} 
            height={100} 
          />
          <span>{weather[0].main}, {Math.round(main.temp)} ºC</span>
        </div>
      </div>

      {/* Embedded Google Maps view of the city location */}
      <div className="google-map-code">
        <iframe 
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${city.name},${city.state}&center=${lat},${lon}&zoom=8&maptype=satellite&language=en`}
          className="map"
          aria-hidden="true" 
        />
      </div>
    </MainInfoContainer>
  )
}