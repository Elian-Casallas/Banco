import React, {useState} from "react";
import GlobalStyle from "./GlobalStilo";
import Container from "./Components/Container";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components"; // claro a oscuro
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI";
import Tema from "./Components/CambioTema";

function App() {

  const [tema, CambioTema] = useState(true);

  const ClickCambioTema = () => {
    CambioTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={tema ? temaClaro: temaOscuro}>
      <GlobalStyle/>
      <BtnTema onClick={ClickCambioTema}>
        <Tema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
