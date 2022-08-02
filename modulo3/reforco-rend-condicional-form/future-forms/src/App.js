import React, { useState } from "react";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import LastPage from "./Components/LastPage";
import styled from "styled-components";

// const Container = styled.div`
//   text-align: center;
// `;

function App() {
  const [etapa, setEtapa] = useState(1);

  const renderizaTela = () => {
    switch (etapa) {
      case 1:
        return <Etapa1 Etapa2={setEtapa} />;
      case 2:
        return <Etapa2 Etapa3={setEtapa} />;
      case 3:
        return <Etapa3 LastPage={setEtapa} />;
      case 4:
        return <LastPage />;
      default:
        return <LastPage />;
    }
  };

  const trocarTela = (tela) => {
    setEtapa(tela + 1);
  };

  return (
    <div>
      {renderizaTela()}
      <button onClick={() => trocarTela(etapa)}>Próxima Etapa</button>
    </div>
  );
}

export default App;
