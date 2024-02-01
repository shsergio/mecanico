import React, { useState } from 'react';
import Header from '../components/Header'; // Importa el componente Header
import '../css/jobForm.css'; // Asegúrate de que el archivo CSS esté correctamente vinculado

const JobForm = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [jobStatus, setJobStatus] = useState('');
  const [jobType, setJobType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías la lógica de envío del formulario
    console.log({ jobDescription, jobStatus, jobType });
  };

  return (
    <>
      <Header /> {/* Incluye el componente Header aquí */}
      <div className="job-form-container">
        <h1 className="form-title">REGISTRAR TRABAJO</h1> {/* Título actualizado aquí */}
        <form className="job-form" onSubmit={handleSubmit}>
          <label htmlFor="jobDescription">Descripción de trabajo</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <label htmlFor="jobStatus">Estado del trabajo:</label>
          <select
            id="jobStatus"
            value={jobStatus}
            onChange={(e) => setJobStatus(e.target.value)}
          >
            <option value="">Seleccionar...</option>
            <option value="en_proceso">En proceso</option>
            <option value="completado">Completado</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
          <label htmlFor="jobType">Tipo de trabajo:</label>
          <select
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Seleccionar...</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="reparacion">Reparación</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Registrar Trabajo</button>
            <button type="button" className="cancel-btn">Cancelar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default JobForm;
