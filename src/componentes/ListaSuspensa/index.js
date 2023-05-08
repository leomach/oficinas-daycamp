import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value)
    }
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoDigitar} value={props.value} required={props.obrigatorio}>
                <option value="" data-default disabled selected>Selecione uma oficina.</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa