import { Rain as StyledRain } from '../styledComponents/city'
import { FiCloudRain } from "react-icons/fi";

import { City } from '../interfaces/city'

interface RainProps{
  city: City
}

export const Rain = ({ city }: RainProps) =>{
  const rain = city.rain ? city.rain['1h'] : null;

  return(
    <StyledRain className="base" fill={!!rain ? (Math.min(rain,5) / 5) * 100 : 0}>
      <span className='title'>
        <FiCloudRain/>  
        <span>Rain</span>
      </span>
      <div className="info-container">
        { !!rain  
          ? <span className="number">{rain} mm for the current day</span>
          : <span className="number">No rain expected for today</span>
        }
        <div className="range">
          <div className="fill"/>
        </div>
      </div>
      
    </StyledRain>
  )
}