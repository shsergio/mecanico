import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta al componente Header sea correcta
import '../css/EditMechanicForm.css'; // Asegúrate de que el nombre del archivo CSS coincida

const EditMechanicForm = ({ mechanicData, onCancel, onEdit }) => {
  return (
    <div>
      <Header /> {/* Inclusión del componente Header */}
      <div className="edit-mechanic-container">
        <div className="edit-mechanic-header">
          <h2>Editar Mecanico</h2>
        </div>
        <form className="edit-mechanic-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" defaultValue={mechanicData.name} />
          </div>
          <div className="form-group">
            <label htmlFor="specialty">Especialidad</label>
            <input type="text" id="specialty" defaultValue={mechanicData.specialty} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" defaultValue={mechanicData.username} />
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onCancel}>Cancelar</button>
            <button type="submit" className="edit-button" onClick={onEdit}>Editar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMechanicForm;
