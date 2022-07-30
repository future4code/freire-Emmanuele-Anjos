import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />

      <Post
        nomeUsuario={"zezinho"}
        fotoUsuario={
          "https://img.freepik.com/premium-photo/fat-fluffy-hamster-eating-seed-isolated_109543-486.jpg?w=2000"
        }
        fotoPost={"https://i.redd.it/0mh8z6yxira51.jpg"}
      />

      <Post
        nomeUsuario={"chuu"}
        fotoUsuario={"https://pbs.twimg.com/media/FMe9gvYXEAIv1yO.jpg"}
        fotoPost={
          "https://i.pinimg.com/originals/1e/10/18/1e1018e1c7f136e6718acd92561060ee.jpg"
        }
      />
    </MainContainer>
  );
}

export default App;
