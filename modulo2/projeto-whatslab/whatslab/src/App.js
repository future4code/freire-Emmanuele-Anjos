import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    conversa: [],
    inputNomeUsuario: "",
    inputMensagem: "",
  };

  userFunction = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };

  mensagemFunction = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  enviarMensagem = () => {
    const novaMensagem = {
      nomeDoUser: this.state.inputNomeUsuario,
      mensagemDoUser: this.state.inputMensagem,
    };
    const conversaAtualizada = [...this.state.conversa, novaMensagem];
    this.setState({ conversa: conversaAtualizada });

    this.setState({ inputNomeUsuario: "" });

    this.setState({ inputMensagem: "" });
  };

  render() {
    const exibeConversa = this.state.conversa.map((objeto) => {
      return (
        <div className="mensagem-input">
          <p>{objeto.nomeDoUser}</p> <p>{objeto.mensagemDoUser}</p>
        </div>
      );
    });
    return (
      <div className="App">
        <div className="container">{exibeConversa}</div>
        <div className="input-style">
          <input
            onChange={this.userFunction}
            type="text"
            placeholder="usuario"
            value={this.state.inputNomeUsuario}
          />

          <input
            onChange={this.mensagemFunction}
            type="text"
            placeholder="mensagem"
            value={this.state.inputMensagem}
          />
          <input
            className="button"
            onClick={this.enviarMensagem}
            type="button"
            value="enviar"
          />
        </div>
      </div>
    );
  }
}

export default App;
