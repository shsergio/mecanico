import React from 'react';
import Header from '../components/Header'; // Ajusta la ruta de importación según sea necesario
import '../css/ACTrabajos.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

const ACTrabajos = () => {
  // Funciones para manejar clics en los botones, si es necesario
  const handleRegistrarTrabajoClick = () => {
    console.log('Registrar Trabajo');
    // Aquí la lógica para navegar al componente correspondiente
  };

  const handleConsultarActualizarClick = () => {
    console.log('Consultar y Actualizar los Trabajos');
    // Aquí la lógica para navegar al componente correspondiente
  };

  const handleSeguimientoTrabajoClick = () => {
    console.log('Seguimiento de Trabajo');
    // Aquí la lógica para navegar al componente correspondiente
  };

  return (
    <>
      <Header /> {/* Encabezado agregado */}
      <div className="trabajos-container">
        <div className="trabajo-item" onClick={handleRegistrarTrabajoClick}>
          REGISTRAR TRABAJO
        </div>
        <div className="trabajo-item" onClick={handleConsultarActualizarClick}>
          CONSULTAR Y ACTUALIZAR LOS TRABAJOS
        </div>
        <div className="trabajo-item" onClick={handleSeguimientoTrabajoClick}>
          SEGUIMIENTO DE TRABAJO
        </div>
      </div>
    </>
  );
};

export default ACTrabajos;
