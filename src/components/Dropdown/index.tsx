// This component represents a dropdown menu that displays a list of cities
// It receives a list of cities, a function to handle city selection, and visibility state
// Uses forwardRef to allow parent components to access the dropdown's DOM element
import { forwardRef } from 'react';
import { DropDownContainer } from '../../styledComponents/dropdown'
import { DropdownItem } from './DropdownItem'

import { BaseCity } from '../../interfaces/baseCity'

// Props interface defining the required data and handlers
interface DropdownProps{
  cities: BaseCity[];              // Array of cities to display
  getCity: (city: BaseCity) => Promise<void>;  // Handler for city selection
  isVisible: boolean;              // Controls dropdown visibility
}

// Interface extending HTMLDivElement to ensure proper typing of ref
interface A extends HTMLDivElement{
  contains: (target: EventTarget | null) => boolean
}

// Main dropdown component using forwardRef to handle DOM references
export const Dropdown = forwardRef<A,DropdownProps>(({ cities, getCity, isVisible }, ref)=>(
  <DropDownContainer ref={ref} isVisible={isVisible}>
    {/* Map through cities array to render individual DropdownItems */}
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
