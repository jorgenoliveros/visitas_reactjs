import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({registrarVisita}) => {

    // Crear state de visitas 

    const [visita, actualizarVisita] = useState({
        cedula: '',
        nombre: '',
        propietario: '',
        depto: '',
        fecha: '',
        hora: '',
        observaciones: ''
    });

    const [ error, actualizarError ] = useState(false)

    
    // Funcion que se ejecuta cada que el usuario escribe en un input
    
    const actualizarState = e => {
        actualizarVisita({
            ...visita,
            [e.target.name] : e.target.value
        })
    }

    //Extraer los valores 
    const { cedula, nombre, propietario, depto, fecha, hora, observaciones} = visita;

    //Cuando el usuario presiona agregar visita
    const submitVisita = e => {

        e.preventDefault();

        // Validar

        if (cedula.trim() === '' || nombre.trim() === '' || propietario.trim() === '' || depto.trim() === '' || fecha.trim() === '' || hora.trim() === '' || observaciones.trim() === '' ){
            actualizarError(true);
            return;
        }

        //Eliminar el mensaje previo
        actualizarError(false);

        // Asignar un ID
        visita.id = uuidv4();

        // Registrar la visita
        registrarVisita(visita);

        // Reiniciar el Form
        actualizarVisita({
            cedula: '',
            nombre: '',
            propietario: '',
            depto: '',
            fecha: '',
            hora: '',
            observaciones: ''
        })

    }


    return ( 
        <Fragment>
            <h2><i className='bx bxs-user-plus' ></i>   Agendar Visita</h2>

            {error ? <p className="alerta-error"><i className="bx bx-error"></i> Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitVisita}
            >
                <label>Cedula</label>
                <input
                    type="text"
                    name="cedula"
                    className="u-full-width"
                    placeholder="Cedula Visitante (Solo numeros)"
                    onChange={actualizarState}
                    value={cedula}
                    minLength="6" 
                    maxLength="12"
                    required pattern="[Kk?0-9\-]+"
                /> 
                <label>Nombre visitante</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre Visitante"
                    onChange={actualizarState}
                    value={nombre}
                    minLength="4" 
                    maxLength="40"
                    required pattern="[A-Za-z ?ñ?]+"
                /> 
                <label>Propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Propietario"
                    onChange={actualizarState}
                    value={propietario}
                    minLength="4" 
                    maxLength="40"
                    required pattern="[A-Za-z ?ñ?]+"
                />
                <label>Departamento</label>
                <input
                    type="text"
                    name="depto"
                    className="u-full-width"
                    placeholder="Departamento"
                    onChange={actualizarState}
                    value={depto}
                    minLength="2" 
                    maxLength="5"
                    required pattern="[A-Za-z?0-9\-]+"
                />   
                 <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    min="2022-01-01" 
                    max="2035-12-31"
                    value={fecha}
                />   
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />  
                <label>Observaciones</label>
                <textarea
                    className="u-full-width"
                    name="observaciones"
                    onChange={actualizarState}
                    value={observaciones}
                    placeholder="Observaciones (Max 200 caracteres)"
                    maxLength="200"
                    required pattern="[A-Za-z0-9\/?]+"
                >
                </textarea>
                <button
                    type="submit"
                    className="button registrar u-full-width"
                >Registrar</button>

            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
    registrarVisita: PropTypes.func.isRequired
}

export default Formulario;