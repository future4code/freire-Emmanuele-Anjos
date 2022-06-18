import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import MinhaFoto from "./img/pfp.jpeg";
import CardPequeno from "./CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={MinhaFoto}
          nome="Sofia"
          descricao="Oi, eu sou a Sofia, tenho 22 dois anos. Atualmente sou estudante de programação full stack. :)"
        />

        <ImagemButton
          imagem="https://cdn2.iconfinder.com/data/icons/general-ui-outlined/16/down-512.png"
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png"
        alrt="email"
        nome="email"
        email="emmanuelesofia@gmail.com"
      />

      <CardPequeno
        imagem="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/localization-512.png"
        nome="Endereço"
        endereco="Rua Professor Ferrúcio 231"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/skirt_mini_girl_fluffy-512.png"
          nome="Mariposa Brechó"
          descricao="Manager."
        />

        <CardGrande
          imagem="https://cdn1.iconfinder.com/data/icons/hobbies-filled-outline-1/340/art_acrylic_illustration_artistic_paint_color_brush_artist-512.png"
          nome="Desenhista freelancer"
          descricao="Desenhando coisas."
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
