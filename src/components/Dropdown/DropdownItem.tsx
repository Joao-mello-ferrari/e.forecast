import { DropDownItem as StyledDropDownItem } from '../../styledComponents/dropdown'
import Image from 'next/image'

import { FiMapPin } from "react-icons/fi";

import { BaseCity } from '../../interfaces/baseCity'

interface DropdownItemProps{
  city: BaseCity;
  getCity: (city: BaseCity) => Promise<void>;
}

export const DropdownItem = ({ city, getCity }: DropdownItemProps) =>{
  return(
    <StyledDropDownItem onClick={()=>getCity(city)}>
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
        <span className="city-area">{!!city.state ? `${city.state}, ` : ''} {city.country}</span>
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
    </StyledDropDownItem>
  )
}