import { Uvi } from '../styledComponents/city'
import { FiSun } from "react-icons/fi";

import { City } from '../interfaces/city'

interface Uvprops{
  city: City
}

export const Uv = ({ city }: Uvprops) =>{
  const clouds = city.clouds;

  const getUVLevel = (level: number) =>{
    if(level < 25) return 'High';
    if(level < 50) return 'Medium';
    if(level < 75) return 'Low';
     return 'Extra low';
  }

  const convertCloudsToUv = () => {
    const normalized = Math.min(clouds.all, 100);
    return 100 - normalized;
  }

  return(
    <Uvi className="base" uvRange={convertCloudsToUv()}>
      <span className='title'>
        <FiSun/>  
        <span>UV Index</span>
      </span>
      <span className="number">{convertCloudsToUv() / 10} - {getUVLevel(clouds.all)}</span>
      <div className="range">
        <div className="dot"/>
      </div>
    </Uvi>
  )
}