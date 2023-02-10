import React from 'react';

const Visita  = ({visita, eliminarVisita}) => (  
    <div className="visita">
        <p>Cedula: <span></span></p>
        <p>Visitante: <span>{visita.nombre}</span></p>
        <p>Propietario: <span>{visita.propietario}</span></p>
        <p>Departamento: <span>{visita.depto}</span></p>
        <p>fecha: <span>{visita.fecha}</span></p>
        <p>Hora: <span>{visita.hora}</span></p>
        <p>Observaciones: <span>{visita.observaciones}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarVisita(visita.id)  }
        >Eliminar <i className='bx bx-trash' ></i></button>
    </div>
);

export default Visita;