import './Message.css'

const Message = (props) => {
    return (
        <div>
            <p id='inscrito' className='inscrito'>{props.message}</p>
        </div>
    )
}

export default Message