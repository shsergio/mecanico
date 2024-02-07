import React from 'react';
import Header from '../components/Header'; // Asegúrate de actualizar la ruta de importación según corresponda
import '../css/EditJobForm.css'; // Asegúrate de que el nombre del archivo CSS coincida

const EditJobForm = ({ jobData, onCancel, onSave }) => {
  // Agrega aquí la lógica para manejar los cambios y el envío del formulario

  return (
    <>
      <Header />
      <div className="edit-job-container">
        <div className="edit-job-header">
          <h2>Editar Trabajo</h2>
        </div>
        <form className="edit-job-form">
          <div className="form-group">
            <label htmlFor="jobId">Id Trabajo</label>
            <input type="text" id="jobId" defaultValue={jobData.id} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input type="text" id="description" defaultValue={jobData.description} />
          </div>
          {/* Continúa agregando los campos necesarios */}
          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onCancel}>Cancelar</button>
            <button type="submit" className="save-button" onClick={onSave}>Editar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditJobForm;
