import './Mensage.css'

const Mensage = (props) => {
    return (
        <div>
            <p id='inscrito' className='inscrito'>{props.mensage}</p>
        </div>
    )
}

export default Mensage