import React, { useState } from 'react';
import '../css/login.css'; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
    onLogin({ username, password });
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form>
        <div className="form-group">
          <label>Usuario:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
