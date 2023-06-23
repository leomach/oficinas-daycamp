import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {
    const oficinas = props.oficinas

    const [nome, setNome] = useState('')
    const [oficina, setOficina] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoInscritoCadastrado({
            nome: nome,
            oficina: oficina
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para fazer sua inscrição.</h2>
                <p>Você pode escolher apenas uma oficina. </p>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} label="Nome Completo" obrigatorio={true} placeholder="Digite seu nome." />
                <ListaSuspensa valor={oficina} aoAlterado={valor => setOficina(valor)} label="Oficina" obrigatorio={true} itens={oficinas} />
                <Botao>Inscrever-se</Botao>
            </form>
        </section>
    )
}

export default Formulario