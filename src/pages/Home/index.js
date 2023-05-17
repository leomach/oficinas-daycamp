import Banner from "../../componentes/Banner"
import Formulario from "../../componentes/Formulario"
import Message from "../../componentes/Message"
import { useState } from 'react';
import axios from 'axios';

const Home = (props) => {
  const oficinas = props.oficinas

  const [message, setMessage] = useState(``)
  const aoNovoInscritoAdicionado = (inscrito) => {
    //https://quartajovembe-raphaelvictor27.b4a.run/
    axios.post("https://backend-oficinas-daycamp.vercel.app", inscrito).then((response) => {
      var inscritoString = `Ótimo, ${inscrito.nome}!  Você foi inscrito na oficina: ${inscrito.oficina}!`
      setMessage(inscritoString)
      console.log(response)
    }).catch((err) => {
      var errorMessage = `${err.response.data.message}`
      setMessage(errorMessage)
      console.error(err)
    });
  }

  return (
    <div>
      <Banner />
      <Formulario aoInscritoCadastrado={inscrito => aoNovoInscritoAdicionado(inscrito)} oficinas={oficinas} />
      <Message message={message} />
    </div>
  )
}

export default Home