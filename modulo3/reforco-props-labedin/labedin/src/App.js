import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import MyImg from "./img/pfp.jpeg";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={MyImg}
          nome="Astrodev"
          descricao="Oi, me chamo Sofia, tenho 22 anos e sou estudande de desenvolvimento web full stack na labenu :). "
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/6327/6327790.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Location-Pin-Map-512.png"
          nome="Endereço:"
          endereco="Caruaru/Pe"
        />
        <CardPequeno
          imagem="https://cdn1.iconfinder.com/data/icons/document-edit-line/64/Document-doc-file-email-message-order-paper-512.png"
          nome="Email:"
          endereco="emmanuelesofia@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Estudante"
        />

        <CardGrande
          imagem="https://cdn0.iconfinder.com/data/icons/education-240/64/paint-palette-interface-art-painting-tool-512.png"
          nome="Artista Freelancer"
          descricao="Fazendo arte."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
