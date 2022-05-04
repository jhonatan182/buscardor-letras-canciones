import useLetras from "../hooks/useLetras";

const Alerta = () => {

    const { alerta } = useLetras();

    return (
        <div className='alerta'>
            <p> {alerta} </p>
        </div>
    )
}

export default Alerta;