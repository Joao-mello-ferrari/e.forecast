import styled from 'styled-components'

interface UviProps{
  uvRange: number;
}

export const CityContainer = styled.div`
  width: 100vw;
  max-width: 1440px;
  display: flex;
  padding: 1.6rem;
`

export const MainInfoContainer = styled.div`
  width: 36vw;
  height: 30vh;
  display: flex;
  padding: 1.4rem;
  background: #D6D6D6;
  border-radius: 0.6rem;

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
      font-size: 1rem;
      font-weight: 600;
      margin-top: auto;

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
`

export const AllInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.75rem;

  margin-left: 1.6rem;

  .base{
    width: 100%;
    height: 25vh;
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
    left: ${props => `${props.uvRange/(100/97)}%`};
  }
`;
