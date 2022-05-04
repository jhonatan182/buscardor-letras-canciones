import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Letra from "./Letra";
import Spinner from "./Spinner";
import Formulario from "./Formulario";

const AppLetras = () => {

    const { alerta , letra , cargando} = useLetras()

    return (
        <>
            <header>Busqueda de Letras y Canciones</header>

            <Formulario />


            <main>
                { alerta ? <Alerta /> : 
                    letra ? <Letra /> :
                        cargando ? <Spinner /> : 
                        <p className="text-center">Busca letras de tus artistas favoritos</p>
                }
            </main>
        </>
    )


}

export default AppLetras; 