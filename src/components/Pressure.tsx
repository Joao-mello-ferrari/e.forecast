// This component displays atmospheric pressure information for a city
// It shows the pressure value in hPa and includes a visual gauge
// The gauge needle rotates based on whether the pressure is higher or lower than standard pressure (1013.25 hPa)
import { Pressure as StyledPressure } from '../styledComponents/city'

import { City } from '../interfaces/city'
import Image from 'next/image';

// Props interface defining the city data required
interface PressureProps{
  city: City;
}

export const Pressure = ({ city }: PressureProps) =>{
  // Get pressure value from city data
  const { pressure } = city.main;

  // Calculate rotation angle for gauge needle based on pressure value
  // Returns angle in degrees relative to standard pressure (1013.25 hPa)
  const getRotationAngle = () =>{
    if(pressure < 1013.25) return 135 * (pressure-1013.25) / 143.25;
    if(pressure > 1013.25) return 135 * (pressure-1013.25) / 71.75;
    return 0;
    // 870 minimal
    // 1013.25 base
    // 1085 highest
  }

  return(
    <StyledPressure className="base" angle={getRotationAngle()-180}>
      {/* Title section with pressure gauge icon */}
      <span className='title'>
        <Image src="/pressure.png" alt="monometer" width={20} height={20}/>
        <span>Pressure</span>
      </span>
      {/* Container for pressure display and gauge */}
      <div className="pressure-container">
        <span className="number">{pressure.toLocaleString('en-US')} hPa<br/></span>
        {/* Visual pressure gauge with rotating needle */}
        <div className="pressure-circle">
          <div className="border-highlighter"/>
          <div className="border-cropper"/>
          <div className="arrow-container">
            <div className="arrow-body"/>
            <div className="round-background"/>
          </div>
          <span className="label low">Low</span>
          <span className="label high">High</span>
        </div>  
      </div>
    </StyledPressure>
  )
}