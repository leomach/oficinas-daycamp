import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = () => {
    const oficinas = [
        'Amor de Cristo refletido em Missões',
        'Amor de Cristo refletido em relacionamentos amorosos',
        'Amor de Cristo para com pecadores'
    ]

    const [nome, setNome] = useState('')
    const [oficina, setOficina] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        alert(`form submeted => ${nome} da oficina ${oficina}`)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para fazer sua inscrição.</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} label="Nome Completo" obrigatorio={true} placeholder="Digite seu nome." />
                <ListaSuspensa valor={oficina} aoAlterado={valor => setOficina(valor)} label="Oficina" obrigatorio={true} itens={oficinas} />
                <Botao>Inscrever-se</Botao>
            </form>
        </section>
    )
}

export default Formulario