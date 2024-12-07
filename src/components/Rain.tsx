// This component displays rainfall information for a city
// It shows the current rainfall amount in millimeters and includes a visual indicator
// The fill bar represents rainfall intensity, maxing out at 5mm
import { Rain as StyledRain } from '../styledComponents/city'
import { FiCloudRain } from "react-icons/fi";

import { City } from '../interfaces/city'

// Props interface defining the city data required
interface RainProps{
  city: City
}

export const Rain = ({ city }: RainProps) =>{
  // Get rainfall amount for last hour, or null if no rain data
  const rain = city.rain ? city.rain['1h'] : null;

  return(
    // Calculate fill percentage for visual indicator (0-100%), capped at 5mm
    <StyledRain className="base" fill={!!rain ? (Math.min(rain,5) / 5) * 100 : 0}>
      {/* Title section with rain cloud icon */}
      <span className='title'>
        <FiCloudRain/>  
        <span>Rain</span>
      </span>
      <div className="info-container">
        {/* Display rainfall amount or "no rain" message */}
        { !!rain  
          ? <span className="number">{rain} mm for the current day</span>
          : <span className="number">No rain expected for today</span>
        }
        {/* Visual indicator showing rainfall intensity */}
        <div className="range">
          <div className="fill"/>
        </div>
      </div>
      
    </StyledRain>
  )
}