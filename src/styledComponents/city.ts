import styled from 'styled-components'

interface UviProps{
  uvRange: number;
}

interface WindProps{
  angle: number;
}

interface RainProps{
  fill: number;
}

export const CityContainer = styled.div`
  width: 100vw;
  max-width: 1440px;
  display: flex;
  padding: 1.6rem;

  @media(max-width: 768px){
    flex-direction: column;
  }
`

export const MainInfoContainer = styled.div`
  width: 100%;
  height: calc(85vh - 3.2rem);
  max-height: 780px;
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  background: #D6D6D6;
  border-radius: 0.6rem;
  grid-column: span 2;

  .main-info-container{
    display: flex;
    width: 100%;
    height: 10rem;

    .country-info-container{
      display: flex;
      flex-direction: column;
      width: 70%;
      
      .city-name{
        font-size: 1.8rem;
        font-weight: 600;
        color: #222222;
        white-space: nowrap;
      }
  
      .city-area{
        font-size: 1.2rem;
        font-weight: 600;
        color: #888888;
        white-space: nowrap;
      }
  
      .city-temp-range{
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 1.4rem;
  
        .max{
          color: #FF7A7A;
        }
        .min{
          color: #7A86FF;
        }
      }
    }

    .day-temperature-container{
      display: flex;
      flex-direction: column;
      margin-left: auto;
      align-items: center;
  
      span{
        font-size: 1.2rem;
        color: #444444;
        white-space: nowrap;
        font-weight: 600;
      }
    }
  }

  .map{
    width: 100%;
    height: calc(85vh - 3.2rem - 2.8rem - 10rem);
    max-height: 560px;
    border: 0;
    border-radius: 0.4rem;
  }

  @media(max-width: 768px){
    width: 100%;

    .main-info-container{
      height: 8rem;
      
      .city-name{
        font-size: 1.4rem!important;
      }
    }

    .country-info-container{
      width: 50%!important;
    }

    .map{
      margin-top: 1rem;
    }
  }
`

export const AllInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.4rem;
  height: calc(85vh - 3.2rem);
  max-height: 780px;
  overflow: auto;
  margin-left: 1.6rem;
  padding-right: 0.4rem;

  @media(max-width: 768px){
    grid-template-columns: 1fr;
    margin-top: 2rem;
    margin-left: 0;
    overflow: unset;
    height: auto!important;
    max-height: unset;
    padding-right: 0;
  }

  .base{
    width: 100%;
    height: 12rem;
    display: flex;
    flex-direction: column;

    padding: 1rem;
    background: #D6D6D6;
    border-radius: 0.6rem;

    .title{
      color: #888888;
      display: flex;
      align-items: center;
      font-size: 1.1rem;
      font-weight: 600;

      svg{
        margin-right: 1rem;
      }
    }

    .number{
      color: #FAFAFA;
      font-size: 1.6rem;
      font-weight: 600;
      margin-top: 0.4rem;
    }
  }

  ::-webkit-scrollbar {
    width: 0.4em;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 0.2rem;
  }
   
  ::-webkit-scrollbar-thumb {
    background-color: #666666;
    border-radius: 0.2rem;
  }
`

export const Uvi = styled.div<UviProps>`
  .range{
    width: 100%;
    height: 1.6rem;
    border-radius: 0.2rem;
    margin-top: auto;
    position: relative;

    webkit-gradient(linear, left top, right top, color-stop(0%, red), color-stop(20%, #ff0), color-stop(40%, lime), color-stop(60%, cyan), color-stop(80%, blue), color-stop(100%, #f0f));
    background: -webkit-linear-gradient(left, red 0%, #ff0 20%, lime 40%, cyan 60%, blue 80%, #f0f 100%);
    background: -o-linear-gradient(left, red 0%, #ff0 20%, lime 40%, cyan 60%, blue 80%, #f0f 100%);
    background: -webkit-gradient(linear, left top, right top, from(red), color-stop(20%, #ff0), color-stop(40%, lime), color-stop(60%, cyan), color-stop(80%, blue), to(#f0f));
    background: linear-gradient(to right, red 0%, #ff0 20%, lime 40%, cyan 60%, blue 80%, #f0f 100%);
  
  .dot{
    height: 1.9rem;
    width: 0.6rem;
    background: white;
    border-radius: 0.2rem;

    position: absolute;
    top: -0.15rem;
    left: ${props => `${props.uvRange/(100/98)}%`};
  }
`;

export const Wind = styled.div<WindProps>`
  .wind-container{
    display: flex;
    justify-content: flex-start;
    height: 100%;
  }

  .info-container{
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    .gusts-container{
      margin-top: auto;
      
      .gusts{
        font-size: 0.8rem;
        color: #FFFFFF;
      }
    }
  }

  .wind-circle{
    height: 7.2rem;
    width: 7.2rem;
    background: repeating-conic-gradient(#D6D6D6 0% 0.82%, #FFF 0.82% 1.25%);
    border-radius: 50%;
    
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    > span{
      position: absolute;
      background: rgba(136,136,136,0.5);
      padding: 0 0.1rem;
      border-radius: 0.15rem;
      color: #FFFFFF;
      font-size: 0.75rem;
    }

    .n{ top: -17.5%; }
    .e{ right: -12.5%; }
    .s{ bottom: -17.5%; }
    .w{ left: -15%; }
    
    .border-highlighter{
      width: 94%;
      height: 94%;
      background: #D6D6D6;
      border-radius: 50%;
      position: absolute;
    
    }

  }

  .arrow-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .arrow-body{
      width: 0.2rem; 
      height: 4.6rem; 
      background: #888888;
      border-radius: 0 0 0.1rem 0.1rem;
      transform: rotate(${props=>props.angle}deg);
    }

  .arrow-pointer-container{
    position: absolute;
    height: 2.3rem;
    
    transform-origin: 50% 100%;
    transform: rotate(${props=>props.angle}deg);

    .arrow-pointer{
        width: 0; 
        height: 0; 
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #888888;
        border-radius: 0 0 0.1rem 0.1rem;

        position: relative;
        top: -2px;
    }
  }
  
  .round-background{
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: rgba(136,136,136,0.1);
    position: absolute;
    top: 50%;
    margin-top: -1.25rem;
  }
`;

export const Sun = styled.div`
  .sun-number{
    display: flex;
    align-items: center;
    font-size: 1.4rem !important;
    
    & + .sun-number{
      margin-top: 0rem;
    }

    > svg{
      margin-left: 0.7rem
    }

    .day{ color: #E6C158 }
    .night{ color: #00022E }
  }
  

  .info-container{
    display: flex;
    margin-top: auto;    

    .info{
      color: #888888;
      display: inline-block; 
      
      & + .info{
        margin-left: 1.2rem;
      }
    }

  }


`;

export const Pressure = styled.div<WindProps>`
  span + span{
    margin-left: 1rem;
  }

  .pressure-container{
    display: flex;

    > span{
      margin-top: 1rem !important;
    }
  }

  .pressure-circle{
    height: 7.2rem;
    width: 7.2rem;
    background: repeating-conic-gradient(#D6D6D6 0% 0.82%, #FFF 0.82% 1.25%);
    border-radius: 50%;
    
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    .border-highlighter{
      width: 94%;
      height: 94%;
      background: #D6D6D6;
      border-radius: 50%;
      position: absolute;
    }

    .border-cropper{
      width: 50%;
      height: 50%;
      background: #D6D6D6;
      
      position: absolute;
      top: 50%;
      left: 50%;
      transform: rotate(45deg);
      transform-origin: top left;

    }
  }

  .arrow-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    .arrow-body{
        width: 0.6rem; 
        height: 4rem; 
        background: #AAAAAA;
        border-radius: 0.2rem;
        transform: rotate(${props=>props.angle}deg);
        transform-origin: top;
        position: absolute;
      }
  }

  .round-background{
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: rgba(136,136,136,0.1);
    position: absolute;
    top: 50%;
    margin-top: -1.25rem;
  }
  
  .label{
    position: absolute;
    color: #888888;
  }

  .low{
    top: 84%;
    left: 5%;
  }

  .high{
    top: 84%;
    right: 5%;
  }
`;

export const Rain = styled.div<RainProps>`
  .info-container{
    display: flex;
    height: 100%;
    
    .range{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      width: 2rem;
      height: 80%;
      background: transparent;
      border: 2px solid #666666;
      border-radius: 0.4rem;
      margin: auto 1.25rem 1rem 0.1rem;
      
      
      .fill{
        height: ${props=>(props.fill / (10/9)) + 5}%;
        width: 100%;
        border-radius: 0 0 0.25rem 0.25rem;
        background: #9CB7FD;
        position: relative;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: -0.15rem;
          right: 0;
          background-repeat: repeat;
          height: 5px;
          background-size: 5px 5px;
          background-image: radial-gradient(
            circle at 2.5px -1.25px,
            transparent 3px,
            #9CB7FD 3.25px
          );
      }
    }

  }

`;

export const Visibility = styled.div`
  .small{
    font-size: 1.2rem !important;
  }
`;

export const Feels = styled.div`
  .small{
    font-size: 1.2rem !important;
  }
`;

export const Humidity = styled.div`
  .small{
    font-size: 1.2rem !important;
  }
`;
