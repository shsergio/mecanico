import React, { useState } from 'react';
import axios from 'axios';
import '../css/login.css';

const Register = ({ onRegister }) => {
  const [descripcion, setDescripcion] = useState('');
  const [horas, setHoras] = useState(0);
  const [estado, setEstado] = useState('');
  const [tipoDeTrabajo, setTipoDeTrabajo] = useState('');
  const [costo, setCosto] = useState(0);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Hacer una solicitud al backend para registrar un nuevo trabajo
      const response = await axios.post('http://localhost:4001/api/trabajos', {
        descripcion,
        horas,
        estado,
        tipo_de_trabajo: tipoDeTrabajo,
        costo,
      });

      // El backend debería devolver algún indicador de éxito
      if (response.data.message) {
        // Manejar el éxito (puedes redirigir al usuario, mostrar un mensaje, etc.)
        console.log('Registro de trabajo exitoso!');
        onRegister(); // ¿Necesitas manejar algo en el frontend?
      } else {
        // Manejar el caso en que el backend indica un fallo
        console.error('Error en el registro de trabajo:', response.data.error);
      }
    } catch (error) {
      console.error('Error en la solicitud de registro de trabajo:', error.message);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        {/* Resto del código para la interfaz de usuario... */}
        <h2>Registro de Trabajo</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              placeholder="Horas"
              value={horas}
              onChange={(e) => setHoras(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Tipo de Trabajo"
              value={tipoDeTrabajo}
              onChange={(e) => setTipoDeTrabajo(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              placeholder="Costo"
              value={costo}
              onChange={(e) => setCosto(e.target.value)}
            />
          </div>
          <button type="submit" className="primary-btn">
            Registrar Trabajo
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
