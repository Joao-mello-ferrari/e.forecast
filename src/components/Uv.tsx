// This component displays the UV index information for a city
// It calculates UV levels based on cloud coverage and displays:
// - A numerical UV index value (0-10)
// - A text description of UV level (High/Medium/Low/Extra low)
// - A visual indicator showing the UV intensity
import { Uvi } from '../styledComponents/city'
import { FiSun } from "react-icons/fi";

import { City } from '../interfaces/city'

interface Uvprops{
  city: City
}

export const Uv = ({ city }: Uvprops) =>{
  // Get cloud coverage data from city
  const clouds = city.clouds;

  // Determine UV level description based on cloud coverage percentage
  const getUVLevel = (level: number) =>{
    if(level < 25) return 'High';
    if(level < 50) return 'Medium';
    if(level < 75) return 'Low';
     return 'Extra low';
  }

  // Convert cloud coverage to UV index value
  // More clouds = lower UV, less clouds = higher UV
  const convertCloudsToUv = () => {
    const normalized = Math.min(clouds.all, 100);
    return 100 - normalized; // Invert percentage since more clouds = less UV
  }

  return(
    <Uvi className="base" uvRange={convertCloudsToUv()}>
      {/* Title section with sun icon */}
      <span className='title'>
        <FiSun/>  
        <span>UV Index</span>
      </span>
      {/* Display UV index value and level description */}
      <span className="number">{convertCloudsToUv() / 10} - {getUVLevel(clouds.all)}</span>
      {/* Visual indicator showing UV intensity */}
      <div className="range">
        <div className="dot"/>
      </div>
    </Uvi>
  )
}