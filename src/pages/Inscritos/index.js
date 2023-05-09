import { useEffect, useState } from 'react';
import axios from 'axios';
import ListaOficina from "../../componentes/ListaOficina";
import Menu from "../../componentes/Menu";

const Inscritos = (props) => {
    const oficinas = props.oficinas

    const [inscritos, setInscritos] = useState([])
  
    useEffect(() => {
      axios.get('http://localhost:8080/').then((res) => {
          setInscritos(res.data)
      })
    }, [])

    return (
        <div>
            <Menu />
            {oficinas.map(oficina => <ListaOficina
            key={oficina.nome} 
            oficina={oficina.nome}
            corPrimaria={oficina.corPrimaria}
            corSecundaria={oficina.corSecundaria}
            inscritos={inscritos}
            />)}

        </div>
    )
}

export default Inscritos