import Image from "next/image";
import { City } from "../interfaces/city"
import { MainInfoContainer } from "../styledComponents/city"

interface MainInfoProps{
  city: City;
}

export const MainInfo = ({ city }: MainInfoProps) =>{
  const { name, state, country, daily, current, lat, lon } = city;

  return(
    <MainInfoContainer>
      <div className="main-info-container">
        <div className="country-info-container">
          <span className="city-name">{name}</span>
          <span className="city-area">{!!state ? `${state}, ` : ''} {country}</span>
          <span className="city-temp-range">
            <span className="max">High: {(daily[0].temp.max).toFixed(1)} ºC</span><br/>
            <span className="min">Low: {(daily[0].temp.min).toFixed(1)} ºC</span>
          </span>
        </div>
        <div className="day-temperature-container">
          <Image
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} 
            alt={current.weather[0].description}
            objectFit="cover" 
            width={100} 
            height={100} 
          />
          <span>{current.weather[0].main}, {Math.round(current.temp)} ºC</span>
        </div>
      </div>

      <div className="google-map-code">
        <iframe 
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${city.name},${city.state}&center=${lat},${lon}&zoom=8&maptype=satellite`}
          className="map"
          aria-hidden="true" 
        />
      </div>
    </MainInfoContainer>
  )
}