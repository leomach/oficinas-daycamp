import './CampoTexto.css'

const CampoTexto = (props) => {
    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value)
    }
    return (
        <div className='campo-texto'>
            <label htmlFor="">{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} type="text" required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto