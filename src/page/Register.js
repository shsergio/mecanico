import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../css/login.css';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
   
    onRegister({ username, password });
  };

  const logoUrl = 'https://files.oaiusercontent.com/file-P6NgoliPziVP6mBZqzxU6q2a?se=2024-01-31T16%3A23%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5f2bc96a-5043-462e-a0be-13dbd733236c.webp&sig=6RG4arQMTr/fpNBz83Wa14jcIVURQ1Hx/YKWOzvSBZo%3D'; 

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="logo-container">
          <img src={logoUrl} alt="Mechaniix Pro" />
        </div>
        <h2>Registro de Usuario</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="primary-btn">
            Registrarse
          </button>
          {/* Link para navegar a la vista de inicio de sesión */}
          <Link to="/" className="secondary-btn">Iniciar Sesión</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
