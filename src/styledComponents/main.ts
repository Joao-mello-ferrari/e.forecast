// This file defines the main container component for the entire application
// It creates a full-viewport width container with:
// - Responsive max-width
// - Minimum full viewport height
// - Centered positioning
// - Full-screen background image styling

import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  max-width: 2120px;
  height: auto;
  min-height: 100vh;
  

  margin: 0 auto;
  position: relative;
  background-image: url("/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
