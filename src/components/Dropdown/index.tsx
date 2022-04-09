import { forwardRef } from 'react';
import { DropDownContainer } from '../../styledComponents/dropdown'
import { DropdownItem } from './DropdownItem'

import { BaseCity } from '../../interfaces/baseCity'

interface DropdownProps{
  cities: BaseCity[];
  getCity: (city: BaseCity) => Promise<void>;
  isVisible: boolean;
}

interface A extends HTMLDivElement{
  contains: (target: EventTarget | null) => boolean
}

export const Dropdown = forwardRef<A,DropdownProps>(({ cities, getCity, isVisible }, ref)=>(
  <DropDownContainer ref={ref} isVisible={isVisible}>
    { cities.map((city,index)=>{
      return(
        <DropdownItem
          key={index}
          city={city}
          getCity={getCity}
        />
      )
    })
    }
  </DropDownContainer>
))
