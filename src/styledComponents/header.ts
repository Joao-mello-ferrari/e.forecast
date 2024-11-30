import styled from 'styled-components'

export const Header = styled.header`
  background: #BECAEA;
  width: 100vw;
  max-width: 2120px;
  height: 15vh;
  max-height: 150px;
  color: white;
  display: flex;
  border-radius: 0 0 0.6rem 0.6rem;
  align-items: center;
  padding: 0 2rem;

  @media(max-width: 768px){
    height: 12vh;
    padding: 0 1rem;
  }
`

export const Logo = styled.span`
  color: transparent;
  font-size: 2rem;
  font-weight: bold;
  font-family: Roboto;
  text-align: center;
  
  background: linear-gradient(45deg, #5E76B8, #000C2C);
  background-clip: text;
  -webkit-background-clip: text;

  @media(max-width: 768px){
    font-size: 1.2rem;
  }
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

  @media(max-width: 768px){
    margin-left: 0.6rem;
    width: 16rem;
    position: relative;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 2.8rem;

  padding: 0.4rem 2rem 0.4rem 1rem;
  outline: none;
  border: 0;
  border-radius: 0.4rem;
  
  color: #444;
  background: transparent;
  font-size: 1rem;
  margin: 0 -1rem;

  @media(max-width: 768px){
    width: 100%;
  }
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

  @media(max-width: 768px){
    position: absolute;
    right: -0.4rem;
  }
`;