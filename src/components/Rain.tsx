import { Rain as StyledRain } from '../styledComponents/city'
import { FiCloudRain } from "react-icons/fi";

import { City } from '../interfaces/city'

interface RainProps{
  city: City
}

export const Rain = ({ city }: RainProps) =>{
  const rain = city.daily[0].rain;
  console.log(rain)

  return(
    <StyledRain className="base" fill={(rain / 5) * 100}>
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