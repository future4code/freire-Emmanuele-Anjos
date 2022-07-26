import React from "react";
import SmallCard from "styled-components";

const Container = SmallCard.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin-top: 5px;
    gap: 5px;
    img{
      width: 10%
    }
`;

function CardPequeno(props) {
  return (
    <Container>
      <img src={props.imagem} />
      <h4>{props.nome}</h4>
      <p>{props.endereco}</p>
    </Container>
  );
}

export default CardPequeno;
