import React, { Fragment } from "react";
import Formulario from './components/Formulario';

function App() {
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
            <Formulario />
          </div>
          <div className="one-half column contenedor">
            <h2><i className='bx bxs-user-detail' ></i>  Visitantes</h2>  
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
