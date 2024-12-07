// This component displays visibility information for a city
// It shows the current visibility distance in kilometers and provides
// a descriptive message about the visibility conditions based on the distance
import { Visibility as StyledVisibility } from '../styledComponents/city'
import { FiEye } from "react-icons/fi";

import { City } from '../interfaces/city'

// Props interface defining the city data required
interface VisibilityProps{
  city: City
}

export const Visibility = ({ city }: VisibilityProps) =>{
  // Get visibility distance in meters from city data
  const visibility = city.visibility;
  
  // Returns a descriptive message based on visibility distance
  // Different thresholds determine the severity of visibility conditions
  const getDescription = (): string =>{
    if(visibility > 8000) return 'It\'s perfectly clear right now'
    if(visibility > 6000) return 'It\'s clear right now'
    if(visibility > 4000) return 'Medium haze is compromising visibility'
    if(visibility > 2000) return 'Light haze is compromising visibility'
    return 'Heavy haze is compromising visibility. Be aware'
  }

  return(
    <StyledVisibility className="base">
      {/* Title section with eye icon */}
      <span className='title'>
        <FiEye/>  
        <span>Visibility</span>
      </span>
      {/* Display visibility in km (converted from meters) */}
      <span className="number">{(visibility/1000).toFixed(2)} km</span>
      {/* Display descriptive message about visibility conditions */}
      <span className="number small">{getDescription()}</span>
    </StyledVisibility>
  )
}