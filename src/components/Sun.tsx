import { Sun as StyledSun } from '../styledComponents/city'
import { FiSun, FiSunrise, FiSunset, FiClock, FiMoon } from "react-icons/fi";

import { City } from '../interfaces/city'

interface SunProps{
  city: City;
}

export const Sun = ({ city }: SunProps) =>{
  const { timezone_offset } = city;
  const { sunrise, sunset } = city.current;

  const now = new Date();

  const rise = new Date((sunrise * 1000)+(now.getTimezoneOffset() * 60000)+(timezone_offset*1000))
  const presentedRise = rise.toLocaleDateString('us-EN',{
    hour: '2-digit',
    minute: '2-digit',
  }).split(' ')[1];

  const set = new Date((sunset * 1000)+(now.getTimezoneOffset() * 60000)+(timezone_offset*1000))
  const presentedSet = set.toLocaleDateString('us-EN',{
    hour: '2-digit',
    minute: '2-digit',
  }).split(' ')[1];

  let localTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (timezone_offset * 1000));

  const presentedLocalTime = localTime.toLocaleDateString('us-EN',{
    hour: '2-digit',
    minute: '2-digit',
  }).split(' ')[1];

  const checkIfItsDay = (): boolean =>{
    if(localTime < rise && localTime < set) return false;
    if(localTime > rise && localTime > set) return false
    return true;
  }

  return(
    <StyledSun className="base">
      <span className='title'>
        <FiClock/>  
        <span>Time</span>
      </span>
      
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
      <span className="number sun-number">Local time - {presentedLocalTime}</span>
      <div className="info-container">
        <span className="info"><FiSunrise/> {presentedRise} </span>
        <span className="info"><FiSunset/> {presentedSet} </span>
      </div>
     
    </StyledSun>
  )
}