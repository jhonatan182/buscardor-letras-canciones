import {useState} from 'react';
import useLetras from '../hooks/useLetras';
import Alerta from './Alerta';

const Formulario = () => {

    const [busqueda , setBusqueda ] = useState({
        artista: '',
        cancion: ''
    });

    const { setAlerta, busquedaLetra } = useLetras();

    const handleSubmit = e => {
        e.preventDefault();

        if( Object.values(busqueda).includes('')  ) {
            setAlerta('Coloca un nombre de artista y cancion')
            return;
        }

        busquedaLetra(busqueda)

    }

    return (
        <form onSubmit={ handleSubmit }>
            <legend> Buscar por Artista y Canción</legend>

            <div className='form-grid'>
                <div>
                    <label>Artista</label>
                    <input 
                        type="text"
                        name='artista'
                        placeholder='Nombre Artista'
                        value={ busqueda.artista }
                        onChange={e => setBusqueda({ 
                            ...busqueda,
                            [e.target.name] : e.target.value
                         })}
                    />
                </div>

                <div>
                    <label>Canción</label>
                    <input 
                        type="text"
                        name='cancion'
                        placeholder='Nombre Cancion'
                        value={ busqueda.cancion }
                        onChange={e => setBusqueda({ 
                            ...busqueda,
                            [e.target.name] : e.target.value
                         })}
                        />
                </div>

                <input type="submit" value='Buscar Cancion'/>

            </div>
        </form>
    )
}

export default Formulario