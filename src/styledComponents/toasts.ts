/**
 * This file contains styled components for toast notifications in the application.
 * It includes:
 * - A container component that manages the positioning and overflow of multiple toasts
 * - Individual toast components with:
 *   - Slide in/out animations
 *   - Flexible content layout
 *   - Hover effects for close button
 *   - Consistent spacing and typography
 */

import styled from 'styled-components'

export const ToastsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  width: 16rem;
  z-index: 2;
  max-height: 60vh;
  padding-bottom: 2rem;
`;

export const Toast = styled.div`
  position: relative;
  top: -4rem;
  padding-top: 2.4rem;

  width: 14rem;
  height: auto;
  border-radius: 0.5rem;

  display: flex;
  padding: 0.5rem 0.5rem 0.2rem 0.5rem;

  color: #4e4e4e;

  -webkit-animation: slide 3s forwards;
  animation: slide 3s forwards;
  
  & + div{
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
    20% {top: 1rem;}
    80% {top: 1rem;}
    100% {top: -4rem;}
  }

  @keyframes slide {
    20% {top: 1rem;}
    80% {top: 1rem;}
    100% {top: -4rem;}
  }
`;