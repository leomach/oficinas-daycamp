import './Banner.css'

const Banner = () => {
    return (
        <header className='banner'>
            <div className="cabecalho">
                <img src="/imagens/daycamp2023 (2).png" alt="Logomarca DayCamp" className='logo' />
            </div>
            <div className="titulo">
                <h1>Escolha sua oficina.</h1>
                <p>Escolha bem, pois as vagas são limitadas!</p>
            </div>
        </header>
    )
}

export default Banner