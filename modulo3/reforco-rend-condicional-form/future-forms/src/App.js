import React, { useState } from "react";
import "./App.css";
import Etapa1 from "./Components/Etapa1";

function App() {
  const [etapa, setEtapa] = useState();

  const renderizaTela = () => {
    switch (etapa) {
      case 1:
        return <Etapa1 Etapa2={setEtapa} />;
      case 2:
        return <Etapa2 />;
      case 3:
        <Etapa3 />;
      default:
        return <p>default</p>;
    }
    return <div>{rendenrizaTela()}</div>;
  };
}

export default App;
