export default class SecaoComentario extends Component {
  state = {
    postagem: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },

      {
        nomeUsuario: "juju",
        fotoUsuario:
          "https://i.pinimg.com/originals/8e/60/39/8e6039a4c9cb6553c2bfcdb042ce8f21.jpg",
        fotoPost:
          "https://i.pinimg.com/736x/86/5c/40/865c40a5a12fba846c9042003409c5d0.jpg",
      },

      {
        nomeUsuario: "lulu",
        fotoUsuario:
          "https://i.pinimg.com/originals/6f/9b/24/6f9b24e85d5bfb8acff726b5457bbd5c.jpg",
        fotoPost:
          "https://i.pinimg.com/originals/47/02/7e/47027ea0b972f76891551f5526f4d452.jpg",
      },
    ],
        nomeUsuario: "",
        fotoUsuario: "",
        fotoPost: ""
  };
  
  render () {
    const oldPost = this.state.postagem.map (postagem) => {
      return {
        <Post key ={postagem.nomeUsuario}
        nomeUsuario = {postagem.nomeUsuario}
        fotoUsuario = {postagem.fotoUsuario}
        fotoPost = {postagem.fotoPost}
        />
      }
    }
  }
 return (<div>{oldPost}</div>)

}
