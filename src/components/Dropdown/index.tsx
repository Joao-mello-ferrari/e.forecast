import { forwardRef } from 'react';
import { DropDownContainer } from '../../styledComponents/dropdown'
import { DropdownItem } from './DropdownItem'

import { BaseCity } from '../../interfaces/baseCity'

interface DropdownProps{
  cities: BaseCity[];
  getCity: (city: BaseCity) => Promise<void>;
}

interface A extends HTMLDivElement{
  contains: (target: EventTarget | null) => boolean
}

export const Dropdown = forwardRef<A,DropdownProps>(({ cities, getCity }, ref)=>(
  <DropDownContainer ref={ref}>
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