import Inscrito from '../Inscrito';
import './ListaOficina.css';

const ListaOficina = (props) => {
    const css = { backgroundColor: props.corPrimaria }

    return (
        props.inscritos.length > 0 && <section className='lista-oficina' style={css}>
            <h3>{props.oficina}</h3>
            <div className='inscritos'>
                {props.inscritos
                    .filter(inscrito => inscrito.oficina === props.oficina)
                    .map((inscrito) => {
                        console.log("renderizando colaborador")
                    return <Inscrito
                        key={inscrito.nome}
                        inscrito={inscrito}
                        corPrimaria={props.corPrimaria}
                    />})}
            </div>

        </section>
    )
}

export default ListaOficina