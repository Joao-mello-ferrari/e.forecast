// This component represents the header of the application
// It contains the app logo and a search bar that allows users to search for cities
// The search can be triggered by clicking the search icon or pressing Enter
// Shows a loading spinner when a search is in progress
import { KeyboardEventHandler } from 'react';

import { Header as StyledHeader, IconContainer, Input, Label, LoaderContainer, Logo } from "../styledComponents/header"
import { FiSearch } from "react-icons/fi";
import { PuffLoader	 } from "react-spinners";

// Props interface defining the search handlers and loading state
interface HeaderProps{
  onSearch: () => void;
  setSearchValue: (value: string) => void;
  setIsDropDownOpen: (state: boolean) => void;
  isSubmiting: boolean;
}

export const Header = ({ 
  onSearch, 
  setSearchValue, 
  setIsDropDownOpen,
  isSubmiting 
}: HeaderProps) =>{
  
  // Handler to check if Enter key was pressed to trigger search
  const checkIfShouldSubmit:KeyboardEventHandler<HTMLInputElement> = async(e) =>{
    if(e.key != 'Enter') return
    return onSearch();
  }

  return(
    <StyledHeader>
        {/* Application logo */}
        <Logo>e.forecast</Logo>
        <Label>
          {/* Search icon that triggers search on click */}
          <IconContainer onClick={onSearch}>
            <FiSearch height={12} width={12}/>
          </IconContainer>
          {/* Search input field */}
          <Input
            placeholder='Search for your city'
            onKeyDown={checkIfShouldSubmit}
            onChange={e=>setSearchValue(e.target.value)}
            onFocus={e=>setIsDropDownOpen(true)}
          />
          {/* Loading spinner shown during search */}
          { isSubmiting &&
            <LoaderContainer>
              <PuffLoader	size={20} color="#000C2C"/>
            </LoaderContainer>
          }
        </Label>
        
      </StyledHeader>
  )
}