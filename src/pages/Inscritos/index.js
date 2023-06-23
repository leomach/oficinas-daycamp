import { useEffect, useState } from 'react';
import axios from 'axios';
import ListaOficina from "../../componentes/ListaOficina";
import Menu from "../../componentes/Menu";
import './inscritos.css'

const Inscritos = (props) => {
    const oficinas = props.oficinas

    const [inscritos, setInscritos] = useState([])
  
    useEffect(() => {
      axios.get('https://backend-oficinas-daycamp.vercel.app').then((res) => {
          setInscritos(res.data)
      })
    }, [])


    return (
        <div className='inscritos-page'>
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