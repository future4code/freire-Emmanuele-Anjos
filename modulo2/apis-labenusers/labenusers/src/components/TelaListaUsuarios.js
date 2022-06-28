import React from "react";

export default class TelaListaUsuarios extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
        <h2>Lista de Usuários</h2>
      </div>
    );
  }
}
