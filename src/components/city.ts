import styled from 'styled-components'

export const CityContainer = styled.div`
  width: 100vw;
  max-width: 1440px;
  display: flex;
  padding: 1.6rem;
`

export const MainInfoContainer = styled.div`
  width: 30vw;
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
`