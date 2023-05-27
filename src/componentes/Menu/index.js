import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
            <div className="cabecalho">
                <img src="/imagens/daycamp2023 (2).png" alt="Logomarca DayCamp" className='logo' />
                <Link to={'/'} >
                    <button>Inscreva-se</button>
                </Link>
                <Link to={'/inscritos'} >
                    <button>Inscritos</button>
                </Link> 
            </div>
    )
}

export default Menu