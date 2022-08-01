function Etapa1(props) {
  return (
    <div>
      <h1>Etapa 1: Dados Gerais</h1>
      <button onClick={() => props.Etapa2()}>Próxima Etapa</button>
    </div>
  );
}

export default Etapa1;
