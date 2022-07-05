import React, { useState } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComment = styled.input`
  width: 100%;
  margin-right: 5px;
`;

const SecaoComentario = (props) => {
  const [imputValue, setImputValue] = useState("");

  const onChangeComentario = (event) => {
    setImputValue(event.target.value);
  };

  return (
    <CommentContainer>
      <InputComment
        className={"input-comentario"}
        placeholder={"Comentário"}
        value={imputValue}
        onChange={onChangeComentario}
      />
      <button
        onClick={() => {
          props.enviarComentario(imputValue);
        }}
      >
        Enviar
      </button>
    </CommentContainer>
  );
};

export default SecaoComentario;
