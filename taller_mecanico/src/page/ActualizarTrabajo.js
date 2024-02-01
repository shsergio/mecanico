import React, { useState } from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta al componente Header sea la correcta
import '../css/ActualizarTrabajo.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

const ActualizarTrabajo = () => {
  const [idTrabajo, setIdTrabajo] = useState('');

  const handleIdChange = (e) => {
    setIdTrabajo(e.target.value);
  };

  const handleAumentarHoras = () => {
    console.log('Aumentando horas para el trabajo ID:', idTrabajo);
    // Aquí iría la lógica para aumentar horas, como una petición a tu API
  };

  const handleAumentarCostoPiezas = () => {
    console.log('Aumentando costo de piezas para el trabajo ID:', idTrabajo);
    // Aquí iría la lógica para aumentar el costo de piezas
  };

  const handleFinalizarTrabajo = () => {
    console.log('Finalizando el trabajo ID:', idTrabajo);
    // Aquí iría la lógica para finalizar el trabajo
  };

  const handleCancelar = () => {
    setIdTrabajo(''); // Resetear el ID del trabajo
    console.log('Operación cancelada');
    // Aquí iría cualquier otra lógica de limpieza o navegación
  };

  return (
    <>
      <Header /> {/* Encabezado añadido */}
      <div className="actualizar-trabajo">
        <h1>Actualizar Trabajo</h1> {/* Título colocado fuera del formulario */}
        <form>
          <div className="input-container">
            <label htmlFor="idTrabajo">Id del trabajo a actualizar</label>
            <input
              id="idTrabajo"
              type="text"
              value={idTrabajo}
              onChange={handleIdChange}
              placeholder="Ingrese id"
            />
          </div>
          <div className="button-container">
            <button type="button" onClick={handleAumentarHoras}>Aumentar horas</button>
            <button type="button" onClick={handleAumentarCostoPiezas}>Aumentar costo de piezas</button>
            <button type="button" onClick={handleFinalizarTrabajo}>Finalizar Trabajo</button>
            <button type="button" onClick={handleCancelar} className="cancelar">Cancelar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ActualizarTrabajo;
