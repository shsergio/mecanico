import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import '../css/login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Correo Electrónico: ${email}, Contraseña: ${password}`);
    onLogin({ email, password });
  };

  const logoUrl = 'https://files.oaiusercontent.com/file-P6NgoliPziVP6mBZqzxU6q2a?se=2024-01-31T16%3A23%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5f2bc96a-5043-462e-a0be-13dbd733236c.webp&sig=6RG4arQMTr/fpNBz83Wa14jcIVURQ1Hx/YKWOzvSBZo%3D';

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="logo-container">
          <img src={logoUrl} alt="Mechaniix Pro" />
        </div>
        <h2>Inicio de sesión</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">
            Iniciar Sesión
          </button>
          <div className="options-container">
            <hr />
            <span>O</span>
            <hr />
          </div>
          {/* Actualización para navegar a la vista de registro */}
          <Link to="/register" className="secondary-btn">Nuevo Usuario</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
