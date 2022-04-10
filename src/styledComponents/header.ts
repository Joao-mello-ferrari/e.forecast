import styled from 'styled-components'

export const Header = styled.header`
  background: #BECAEA;
  width: 100vw;
  max-width: 1440px;
  height: 15vh;
  color: white;
  display: flex;
  border-radius: 0 0 0.6rem 0.6rem;
  align-items: center;
`

export const Logo = styled.span`
  color: transparent;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 2rem;
  font-family: Roboto;
  text-align: center;
  
  background: linear-gradient(45deg, #5E76B8, #000C2C);
  background-clip: text;
  -webkit-background-clip: text;
`

export const Label = styled.label`
  margin-left: 30%;
  width: 32rem;
  height: 2.8rem;
  border: 1.8px solid #fff;

  background: #fff;
  color: #444;
  display: flex;
  flex-direction: row;
  border-radius: 0.4rem;

  transition: border 0.2s;

  &:focus-within{
    border: 1.8px solid #000C2C;
    color: #000C2C
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 2.8rem;

  padding: 0.4rem 1rem;
  outline: none;
  border: 0;
  border-radius: 0.4rem;
  
  color: #444;
  background: transparent;
  font-size: 1rem;

  margin: 0 -1rem;
`

export const IconContainer = styled.div`
  width: 3.6rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    font-size: 1.2rem;
  }
`;

export const LoaderContainer = styled.div`
  width: 3.6rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;