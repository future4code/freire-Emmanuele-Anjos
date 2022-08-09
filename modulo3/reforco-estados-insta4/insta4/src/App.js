import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [posts, setPosts] = useState([
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150",
    },
    {
      nomeUsuario: "zezinho",
      fotoUsuario:
        "https://img.freepik.com/premium-photo/fat-fluffy-hamster-eating-seed-isolated_109543-486.jpg?w=2000",
      fotoPost: "https://i.redd.it/0mh8z6yxira51.jpg",
    },
    {
      nomeUsuario: "chuu",
      fotoUsuario: "https://pbs.twimg.com/media/FMe9gvYXEAIv1yO.jpg",
      fotoPost:
        "https://i.pinimg.com/originals/1e/10/18/1e1018e1c7f136e6718acd92561060ee.jpg",
    },
  ]);

  const listaPosts = posts.map((post) => {
    return (
      <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    );
  });

  const [inputNomeUsuario, setInputNomeUsuario] = useState("");
  const [inputFotoUsuario, setInputFotoUsuario] = useState("");
  const [inputFotoPost, setInputFotoPost] = useState("");

  const adicionaPost = () => {
    const novoPost = {
      nomeUsuario: inputNomeUsuario,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost,
    };
    const novaListaDePost = [...posts, novoPost];
    setPosts(novaListaDePost);
  };

  const onChangeNomeUsuario = (event) => {
    setInputNomeUsuario(event.target.value);
  };
  const onChangeFotoUsuario = (event) => {
    setInputFotoUsuario(event.target.value);
  };
  const onChangeFotoPost = (event) => {
    setInputFotoPost(event.target.value);
  };

 //useEffect(()=>{adicionaPost()},[listaPosts])

  return (
    <MainContainer>
      <input
        value={inputNomeUsuario}
        onChange={onChangeNomeUsuario}
        placeholder={"Username"}
      />
      <input
        value={inputFotoUsuario}
        onChange={onChangeFotoUsuario}
        placeholder={"Photo icon"}
      />
      <input
        value={inputFotoPost}
        onChange={onChangeFotoPost}
        placeholder={"Post"}
      />

      <button onClick={adicionaPost}>Postar</button>
      {listaPosts}
    </MainContainer>
  );
}

export default App;
