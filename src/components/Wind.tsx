import { Wind as StyledWind } from '../styledComponents/city'
import { FiWind } from "react-icons/fi";

import { City } from '../interfaces/city'

interface WindProps{
  city: City;
}

export const Wind = ({ city }: WindProps) =>{
  const { speed, deg, gust } = city.wind;

  const degToCompass = (num: number) =>{
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

  return(
    <StyledWind className="base" angle={deg-180}>
      <span className='title'>
        <FiWind/>  
        <span>Wind</span>
      </span>
      <div className="wind-container">
        <div className="info-container">
          <span className="number">{degToCompass(deg)}<br/></span>
          <span className="number">{speed} m/s<br/></span>
          <div className="gusts-container">
            { !!gust && <span className="gusts">*gusts of {gust} m/s</span>}
          </div>
        </div>
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