import { Uvi } from '../styledComponents/city'
import { FiSun } from "react-icons/fi";

import { City } from '../interfaces/city'

interface Uvprops{
  city: City
}

export const Uv = ({ city }: Uvprops) =>{
  const { uvi } = city.current;

  const getUVLevel = (level: number) =>{
    if(level < 2.5) return 'Low';
    if(level < 5) return 'Medium';
    if(level < 7.5) return 'High';
     return 'Extra High';
  }

  return(
    <Uvi className="base" uvRange={uvi*10}>
      <span className='title'>
        <FiSun/>  
        <span>UV Index</span>
      </span>
      <span className="number">{uvi} - {getUVLevel(uvi)}</span>
      <div className="range">
        <div className="dot"/>
      </div>
    </Uvi>
  )
}