import { Humidity as StyledHumidity } from '../styledComponents/city'
import { FiDroplet } from "react-icons/fi";

import { City } from '../interfaces/city'

interface HumidityProps{
  city: City
}

export const Humidity = ({ city }: HumidityProps) =>{
  const { humidity, dew_point } = city.current;

  return(
    <StyledHumidity className="base">
      <span className='title'>
        <FiDroplet/>  
        <span>Humidity</span>
      </span>
      <span className="number">{humidity} %</span>
      <span className="number small">The dew point is around {dew_point.toFixed(1)} ºC</span>
    </StyledHumidity>
  )
}