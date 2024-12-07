// This component displays sun-related information for a city including:
// - Current time in the city's timezone
// - Whether it's currently day or night
// - Sunrise and sunset times
// The component handles timezone conversions and displays times in local format
import { Sun as StyledSun } from '../styledComponents/city'
import { FiSun, FiSunrise, FiSunset, FiClock, FiMoon } from "react-icons/fi";

import { City } from '../interfaces/city'

interface SunProps{
  city: City;
}

export const Sun = ({ city }: SunProps) =>{
  // Extract timezone and sun times from city data
  const { timezone } = city;
  const { sunrise, sunset } = city.sys;

  const now = new Date();

  // Convert sunrise time to local timezone
  const rise = new Date((sunrise * 1000)+(now.getTimezoneOffset() * 60000)+(timezone*1000))
  const presentedRise = rise.toLocaleDateString('us-EN',{
    hour: '2-digit',
    minute: '2-digit',
  }).split(' ')[1];

  // Convert sunset time to local timezone
  const set = new Date((sunset * 1000)+(now.getTimezoneOffset() * 60000)+(timezone*1000))
  const presentedSet = set.toLocaleDateString('us-EN',{
    hour: '2-digit',
    minute: '2-digit',
  }).split(' ')[1];

  // Get current time in city's timezone
  let localTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (timezone*1000));

  const presentedLocalTime = localTime.toLocaleDateString('us-EN',{
    hour: '2-digit',
    minute: '2-digit',
  }).split(' ')[1];

  // Determine if it's currently daytime based on sunrise/sunset times
  const checkIfItsDay = (): boolean =>{
    if(localTime < rise && localTime < set) return false;
    if(localTime > rise && localTime > set) return false
    return true;
  }

  return(
    <StyledSun className="base">
      {/* Title section with clock icon */}
      <span className='title'>
        <FiClock/>  
        <span>Time</span>
      </span>
      
      {/* Display whether it's day or night with appropriate icon */}
      <span className="number sun-number">
        { checkIfItsDay() 
          ? 'It\'s currently day'
          : 'It\'s currently night'
        }
        { checkIfItsDay() 
          ?  <FiSun className="day"/>
          :  <FiMoon className="night"/>
        } 
      </span>
      {/* Show current local time */}
      <span className="number sun-number">Local time - {presentedLocalTime}</span>
      {/* Display sunrise and sunset times */}
      <div className="info-container">
        <span className="info"><FiSunrise/> {presentedRise} </span>
        <span className="info"><FiSunset/> {presentedSet} </span>
      </div>
     
    </StyledSun>
  )
}