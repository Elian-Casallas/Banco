import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { StyledIcono } from "../UI";

const Tema = ({tema}) => {
    console.log(tema)
    const oscuro = <StyledIcono src={themeOff} alt={"Tema Oscuro"}/>
    const claro = <StyledIcono src={themeOn} alt={"Tema Claro"}/>

    return <>{tema ? oscuro : claro}</>;
}

export default Tema;