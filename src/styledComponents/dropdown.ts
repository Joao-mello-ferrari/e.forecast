import styled from 'styled-components'

interface DropdownProps{
  isVisible: boolean;
}

export const DropDownContainer = styled.div<DropdownProps>`
  width: 40vw;
  max-width: 576px;
  max-height: 70vh;

  z-index: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  border-radius: 0.4rem;
  background: #FFFFFF;
  border: 3px solid #DDD;

  padding: 1.4rem;
  position: absolute;
  top: 10vh;
  left: 30%;

  overflow-y: auto;

  transform: ${props=>props.isVisible  ? 'translateY(3vh)' : 'translateY(0vh)'};;
  visibility: ${props=>props.isVisible  ? 'visible' : 'hidden'};
  opacity: ${props=>props.isVisible  ? 1 : 0};

  transition: all 0.2s;

  ::-webkit-scrollbar {
    width: 0.5em;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #D6D6D6;
    border-radius: 0.2rem;
  }
   
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 0.2rem;
  }

  @media(max-width: 768px){
    width: 90%;
    top: 7vh;
    left: 5%;
  }
  `;

  export const DropDownItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 1rem;
    background: #E6E6E6;
    border-radius: 0.3rem;

    transition: background 0.2s;

    &:hover{
      background: #DFDFDF;
    }

    & + div{
      margin-top: 1.4rem;
    }

    .country-image-container{
      width: 6rem;
      
      span{
        border-radius: 1rem;
      }
    }

    .country-info-container{
      display: flex;
      flex-direction: column;
      margin-left: 1.6rem;

      .city-name{
        font-size: 1.4rem;
        font-weight: 600;
        color: #222222;
      }

      .city-area{
        font-size: 0.8rem;
        font-weight: 600;
        color: #666666;
      }
    }

    .map-icon{
      position: relative;
      margin-left: 1.6rem;

      &:hover{
        cursor: pointer;
        > span{
          visibility: visible;
          opacity: 1;
        }
      }

      > svg{
        color: #333333;
        height: 1.4rem;
        width: 1.4rem;
      }
      
      > span{
        padding: 0.2rem 0.4rem;
        background: #CCCCCC;
        border-radius: 0.4rem;

        font-size: 0.8rem;
        color: #222222;

        position: absolute;
        top: 0;
        left: 2rem;
        
        white-space: nowrap;
        visibility: hidden;
        opacity: 0;

        transition: opacity 0.2s;
      }
    }

  @media(max-width: 768px){
    .country-image-container{
      width: 4rem;
    }

    .city-name{
      font-size: 1.2rem!important;
    }

    .map-icon{
      > span{
        top: 1.7rem;
        left: -1.4rem;
      }
    }

  }
`