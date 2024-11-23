import { Visibility as StyledVisibility } from '../styledComponents/city'
import { FiEye } from "react-icons/fi";

import { City } from '../interfaces/city'

interface VisibilityProps{
  city: City
}

export const Visibility = ({ city }: VisibilityProps) =>{
  const visibility = city.visibility;
  
  const getDescription = (): string =>{
    if(visibility > 8000) return 'It\'s perfectly clear right now'
    if(visibility > 6000) return 'It\'s clear right now'
    if(visibility > 4000) return 'Medium haze is compromising visibility'
    if(visibility > 2000) return 'Light haze is compromising visibility'
    return 'Heavy haze is compromising visibility. Be aware'
  }

  return(
    <StyledVisibility className="base">
      <span className='title'>
        <FiEye/>  
        <span>Visibility</span>
      </span>
      <span className="number">{(visibility/1000).toFixed(2)} km</span>
      <span className="number small">{getDescription()}</span>
    </StyledVisibility>
  )
}