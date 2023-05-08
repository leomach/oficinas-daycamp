import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import axios from 'axios';
import Mensage from './componentes/Mensage';

function App() {
  const [inscritos, setInscritos] = useState([])
  const [mensage, setMensage] = useState(``)

  const aoNovoInscritoAdicionado = (inscrito) => {
    setInscritos([...inscritos, inscrito])
    
    axios.post("https://quartajovembe-raphaelvictor27.b4a.run/", inscrito).then((response) => {
      var inscritoString = `Ótimo, ${inscrito.nome}!  Você foi inscrito na oficina: ${inscrito.oficina}!`
      setMensage(inscritoString)
      console.log(response)
    }).catch((err) => {
      var errorMensage = `Algo deu errado na sua inscrição... O erro foi: ${err}`
      setMensage(errorMensage)
      console.error(err)
    });
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoInscritoCadastrado={inscrito => aoNovoInscritoAdicionado(inscrito)} />
      <Mensage mensage={mensage} />
    </div>
  );
}

export default App;
