import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <img src={props.imagem} alt="value" />
      <h4>{props.nome}</h4>
      <p>{props.endereco}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default CardPequeno;
