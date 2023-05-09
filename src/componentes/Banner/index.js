import Menu from '../Menu'
import './Banner.css'

const Banner = () => {
    return (
        <header className='banner'>
            <Menu />
            <div className="titulo">
                <h1>Escolha sua oficina.</h1>
                <p>Escolha bem, pois as vagas são limitadas!</p>
            </div>
        </header>
    )
}

export default Banner