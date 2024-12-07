// This component displays the "feels like" temperature for a city
// It shows the perceived temperature and compares it with the actual temperature
// providing a description of whether it feels hotter, colder, or similar
import { Feels as StyledFeels } from '../styledComponents/city'
import { FiThermometer } from "react-icons/fi";

import { City } from '../interfaces/city'

// Props interface defining the city data required
interface FeelsProps{
  city: City
}

export const Feels = ({ city }: FeelsProps) =>{
  // Destructure temperature values from city data
  const { temp, feels_like } = city.main;
  
  // Function to determine how the perceived temperature compares to actual
  const getDescription = (): string =>{
    if(Math.abs(temp-feels_like) < 2) return 'Close to actual temperature';
    if(Math.abs(temp-feels_like) > 0) return 'Colder than actual temperature';
    return 'Hotter than actual temperature';
  }

  return(
    <StyledFeels className="base">
      {/* Title section with thermometer icon */}
      <span className='title'>
        <FiThermometer/>  
        <span>Feels like</span>
      </span>
      {/* Display perceived temperature in Celsius */}
      <span className="number">{feels_like.toFixed(1)} ºC</span>
      {/* Show comparison with actual temperature */}
      <span className="number small">{getDescription()}</span>
    </StyledFeels>
  )
}