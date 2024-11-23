import { Humidity as StyledHumidity } from '../styledComponents/city'
import { FiDroplet } from "react-icons/fi";

import { City } from '../interfaces/city'

interface HumidityProps{
  city: City
}

export const Humidity = ({ city }: HumidityProps) =>{
  const { humidity, temp } = city.main;

  function calculateDewPoint(tempCelsius: number, humidity: number): number {
    const a = 17.27;
    const b = 237.7;
    const alpha = (a * tempCelsius) / (b + tempCelsius) + Math.log(humidity / 100);
    const dewPoint = (b * alpha) / (a - alpha);
    return dewPoint;
  }

  return(
    <StyledHumidity className="base">
      <span className='title'>
        <FiDroplet/>  
        <span>Humidity</span>
      </span>
      <span className="number">{humidity} %</span>
      <span className="number small">The dew point is around {calculateDewPoint(temp, humidity).toFixed(1)} ºC</span>
    </StyledHumidity>
  )
}