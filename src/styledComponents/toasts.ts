import styled from 'styled-components'

export const ToastsContainer = styled.div`
  position: absolute;
  top: 0;
  padding-top: 2.4rem;
  right: 0;
  overflow: hidden;
  width: 16rem;
  z-index: 1;
  max-height: 90vh;
`;

export const Toast = styled.div`
  position: relative;
  top: -3rem;
  padding-top: 2.4rem;

  width: 14rem;
  height: auto;
  border-radius: 0.5rem;

  display: flex;
  padding: 0.5rem 0.5rem 0.2rem 0.5rem;

  color: #4e4e4e;

  -webkit-animation: slide 3s forwards;
  animation: slide 3s forwards;
  
  & + .toast{
    margin-top: 0.5rem;
  }

  > div{
    margin: 0 auto 0 0.6rem;
    line-height: 1rem;
  }

  strong{
    color: #111111;
  }
  
  p{
    margin-top: 0.3rem;
    font-size: 0.8rem;
    color: #111111;
  }
  
  > svg{
    padding-top: 0.1rem;
    color: #111111;

    &:hover{
      cursor: pointer;
    }
  }
  
  @-webkit-keyframes slide {
    20% {top: 0;}
    80% {top: 0;}
    100% {top: -8rem;}
  }

  @keyframes slide {
    20% {top: 0;}
    80% {top: 0;}
    100% {top: -8rem;}
  }
`;