// This file defines a styled button component with a black background that changes to orange on hover
// It uses styled-components for styling and exports a reusable Button component

import styled from 'styled-components'

export const Button = styled.button`
  background: #000000;
  border-radius: 3px;
  border: none;
  color: white;

  &:hover{
    background: #cc9000;
  }
`