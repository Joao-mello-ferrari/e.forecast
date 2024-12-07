// This component displays humidity information for a city
// It shows the current humidity percentage and calculates the dew point
// The dew point is the temperature at which water vapor starts to condense
import { Humidity as StyledHumidity } from '../styledComponents/city'
import { FiDroplet } from "react-icons/fi";

import { City } from '../interfaces/city'

// Props interface defining the city data required
interface HumidityProps{
  city: City
}

export const Humidity = ({ city }: HumidityProps) =>{
  // Destructure humidity and temperature values from city data
  const { humidity, temp } = city.main;

  // Calculate the dew point temperature using the Magnus formula
  // Takes temperature in Celsius and relative humidity percentage as inputs
  function calculateDewPoint(tempCelsius: number, humidity: number): number {
    const a = 17.27;  // Magnus formula constants
    const b = 237.7;
    const alpha = (a * tempCelsius) / (b + tempCelsius) + Math.log(humidity / 100);
    const dewPoint = (b * alpha) / (a - alpha);
    return dewPoint;
  }

  return(
    <StyledHumidity className="base">
      {/* Title section with water droplet icon */}
      <span className='title'>
        <FiDroplet/>  
        <span>Humidity</span>
      </span>
      {/* Display current humidity percentage */}
      <span className="number">{humidity} %</span>
      {/* Show calculated dew point temperature */}
      <span className="number small">The dew point is around {calculateDewPoint(temp, humidity).toFixed(1)} ºC</span>
    </StyledHumidity>
  )
}