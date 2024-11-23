import { Feels as StyledFeels } from '../styledComponents/city'
import { FiThermometer } from "react-icons/fi";

import { City } from '../interfaces/city'

interface FeelsProps{
  city: City
}

export const Feels = ({ city }: FeelsProps) =>{
  const { temp, feels_like } = city.main;
  
  const getDescription = (): string =>{
    if(Math.abs(temp-feels_like) < 2) return 'Close to actual temperature';
    if(Math.abs(temp-feels_like) > 0) return 'Colder than actual temperature';
    return 'Hotter than actual temperature';
  }

  return(
    <StyledFeels className="base">
      <span className='title'>
        <FiThermometer/>  
        <span>Feels like</span>
      </span>
      <span className="number">{feels_like.toFixed(1)} ºC</span>
      <span className="number small">{getDescription()}</span>
    </StyledFeels>
  )
}