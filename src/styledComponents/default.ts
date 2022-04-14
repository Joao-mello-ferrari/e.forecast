import styled from 'styled-components'

export const Default = styled.button`
  width: 60vw;
  height: 40vh;
  
  position: absolute;
  top: 40vh;
  left: 20vw;

  background: #E9EFFD;
  border: 0;
  border-radius: 1rem;

  .default-title{
    font-size: 2.4rem;
    font-weight: 600;
    color: #002074;
  }

  .default-text{
    font-size: 1.2rem;
    margin-top: -1rem;
    color: #002074;
  }

  @media(max-width: 768px){
    width: 80vw;
    height: 60vh;
    
    top: 20vh;
    left: 10vw;
  }

`