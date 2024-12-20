// This component displays wind information for a city including:
// - Wind direction (as compass direction N, NE, etc.)
// - Wind speed in meters per second
// - Wind gusts if present
// - A visual compass showing wind direction
import { Wind as StyledWind } from '../styledComponents/city'
import { FiWind } from "react-icons/fi";

import { City } from '../interfaces/city'

interface WindProps{
  city: City;
}

export const Wind = ({ city }: WindProps) =>{
  // Extract wind data from city object
  const { speed, deg, gust } = city.wind;

  // Convert degrees to compass direction (N, NE, E, etc)
  const degToCompass = (num: number) =>{
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

  return(
    // Rotate the wind direction indicator based on wind angle
    <StyledWind className="base" angle={deg-180}>
      {/* Title section with wind icon */}
      <span className='title'>
        <FiWind/>  
        <span>Wind</span>
      </span>
      <div className="wind-container">
        {/* Display wind direction, speed and gusts */}
        <div className="info-container">
          <span className="number">{degToCompass(deg)}<br/></span>
          <span className="number">{speed} m/s<br/></span>
          <div className="gusts-container">
            { !!gust && <span className="gusts">*gusts of {gust} m/s</span>}
          </div>
        </div>
        {/* Visual compass showing wind direction */}
        <div className="wind-circle">
          <span className="n">N</span>
          <span className="e">E</span>
          <span className="s">S</span>
          <span className="w">W</span>
          <div className="border-highlighter"/>
          <div className="arrow-container">
            <div className="round-background"/>
            <div className="arrow-pointer-container">
              <div className="arrow-pointer"/>
              <div className="fake-arrow-body"/>
            </div>
            <div className="arrow-body"/>
          </div>
        </div>
      </div>
    </StyledWind>
  )
}