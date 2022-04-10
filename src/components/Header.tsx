import { KeyboardEventHandler } from 'react';

import { Header as StyledHeader, IconContainer, Input, Label, LoaderContainer, Logo } from "../styledComponents/header"
import { FiSearch } from "react-icons/fi";
import { PuffLoader	 } from "react-spinners";

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
  
  const checkIfShouldSubmit:KeyboardEventHandler<HTMLInputElement> = async(e) =>{
    if(e.key != 'Enter') return
    return onSearch();
  }

  return(
    <StyledHeader>
        <Logo>e.forecast</Logo>
        <Label>
          <IconContainer onClick={onSearch}>
            <FiSearch height={12} width={12}/>
          </IconContainer>
          <Input
            placeholder='Search for your city'
            onKeyDown={checkIfShouldSubmit}
            onChange={e=>setSearchValue(e.target.value)}
            onFocus={e=>setIsDropDownOpen(true)}
          />
          { isSubmiting &&
            <LoaderContainer>
              <PuffLoader	size={20} color="#000C2C"/>
            </LoaderContainer>
          }
        </Label>
        
      </StyledHeader>
  )
}