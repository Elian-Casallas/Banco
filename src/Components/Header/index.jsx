import React from "react";
import styled from "styled-components"
import logo from "../../assets/images/logo.svg";
import {colorPrimario} from "../UI/Variables"

const StyledHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const BotonHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${ (props) =>  props.color ? "White" : "#41d3be"};
  background-color: ${ (props) =>  props.Background ? "White" : "transparent"};
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo Smart Bank" />
      <div>
        <BotonHeader href="https://google.com" Background>
          Ayuda
        </BotonHeader>
        <BotonHeader href="https://google.com" color>
          Salir
        </BotonHeader>
      </div>
    </StyledHeader>
  );
};

export default Header;
