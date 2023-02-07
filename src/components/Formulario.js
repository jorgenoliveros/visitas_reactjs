import React, { Fragment, useState } from 'react';

const Formulario = () => {

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

        // Asignar un ID

        // Crear la visita

        // Reiniciar el Form

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
                    minlength="6" 
                    maxlength="12"
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
                    minlength="4" 
                    maxlength="40"
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
                    minlength="4" 
                    maxlength="40"
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
                    minlength="2" 
                    maxlength="5"
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
                    maxlength="200"
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

export default Formulario;