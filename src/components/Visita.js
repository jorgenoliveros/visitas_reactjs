import React from 'react';

const Visita  = ({visita}) => (  
    <div className="visita">
        <p>Cedula: <span></span></p>
        <p>Visitante: <span>{visita.nombre}</span></p>
        <p>Propietario: <span>{visita.propietario}</span></p>
        <p>Departamento: <span>{visita.depto}</span></p>
        <p>fecha: <span>{visita.fecha}</span></p>
        <p>Hora: <span>{visita.hora}</span></p>
        <p>Observaciones: <span>{visita.observaciones}</span></p>
    </div>
);

export default Visita;