import { Pressure as StyledPressure } from '../styledComponents/city'

import { City } from '../interfaces/city'
import Image from 'next/image';

interface PressureProps{
  city: City;
}

export const Pressure = ({ city }: PressureProps) =>{
  const { pressure } = city.current;

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
      <span className='title'>
        <Image src="/pressure.png" alt="monometer" width={20} height={20}/>
        <span>Pressure</span>
      </span>
      <div className="pressure-container">
        <span className="number">{pressure.toLocaleString('en-US')} hPa<br/></span>
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