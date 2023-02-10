import React, { Fragment, useState, useEffect } from "react";
import Formulario from './components/Formulario';
import Visita from './components/Visita';

function App() {

  // visitas en local storage
  let visitasIniciales = JSON.parse(localStorage.getItem('visitas'));
  if(!visitasIniciales){
    visitasIniciales = [];
  }

  //Arreglo de visitas
  const [visitas, guardarVisitas ] = useState ([]);

  // Use Effect para realizar ciertas operaciones cuando es state cambia
  useEffect( () => {
    let visitasIniciales = JSON.parse(localStorage.getItem('visitas'));

    if(visitasIniciales) {
      localStorage.setItem('visitas', JSON.stringify(visitas));
    } else {
      localStorage.setItem('visitas', JSON.stringify([]));
    }
  }, [visitas] );

  // Funcion que tome las visitas actuales y agregue la nueva
  const registrarVisita = visita => {
    guardarVisitas([
      ...visitas,
      visita
    ]);
  }

  // Funcion que elimina una visita por su ID
  const eliminarVisita = id => {
    const nuevasVisitas = visitas.filter( visita => visita.id !== id );
    guardarVisitas(nuevasVisitas);
  }

  // Mensaje condicional
  const titulo = visitas.length === 0 ? 'No hay visitas' : 'Visitantes' ;

  return (
    <Fragment>
      <div className="titulo">
        <div className="icono">
          <i className='bx bx-buildings' ></i>
        </div>
        <h1>Registro de Visitantes</h1>
      </div>

      <div className="container">
        <div className="Row">
          <div className="one-half column contenedor">
            <Formulario 
              registrarVisita={registrarVisita}
            />
          </div>
          <div className="one-half column contenedor">
            <h2><i className='bx bxs-user-detail' ></i>  {titulo}</h2>
            {visitas.map(visita => (
              <Visita 
                key={visita.id}
                visita={visita}
                eliminarVisita={eliminarVisita}
              />
            ))}  
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
