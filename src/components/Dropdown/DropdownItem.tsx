// This component represents an item in a dropdown menu that displays city information
// It shows the country flag, city name, state/country, and a link to view the location on Google Maps
import { DropDownItem as StyledDropDownItem } from '../../styledComponents/dropdown'
import Image from 'next/image'

import { FiMapPin } from "react-icons/fi";

import { BaseCity } from '../../interfaces/baseCity'

// Props interface defining the required city data and click handler
interface DropdownItemProps{
  city: BaseCity;
  getCity: (city: BaseCity) => Promise<void>;
}

export const DropdownItem = ({ city, getCity }: DropdownItemProps) =>{
  return(
    // Container that triggers getCity when clicked
    <StyledDropDownItem onClick={()=>getCity(city)}>
      {/* Country flag image container */}
      <div className="country-image-container">
        <Image 
          src={`https://flagsapi.com/${city.country}/flat/64.png`} 
          objectFit="cover" 
          width={142} 
          height={100} 
          alt={city.name} 
        />
      </div>
      {/* City information container showing name and location */}
      <div className="country-info-container">
        <span className="city-name">{city.name}</span>
        <span className="city-area">{!!city.state ? `${city.state}, ` : ''} {city.country}</span>
      </div>
      {/* Google Maps link using city coordinates */}
      <a 
        className="map-icon" 
        href={`https://maps.google.com/?q=${city.lat},${city.lon}`} 
        target='_blank'
        rel="noreferrer"
      >
        <FiMapPin/>
        <span>See on map</span>
      </a>
    </StyledDropDownItem>
  )
}