import './Inscrito.css'

const Inscrito = (props) => {
    return (
        <div>
            <div className='inscrito'>
                <h4 style={{ color: props.corPrimaria }}>{props.inscrito.nome}</h4>
            </div>
        </div>
    )
}

export default Inscrito