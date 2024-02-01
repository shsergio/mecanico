import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';
import JobForm from './page/JobForm'; // Importa el componente JobForm

const App = () => {
  const handleLogin = (userData) => {
    console.log('Usuario autenticado:', userData);
  };

  const handleRegister = (userData) => {
    console.log('Usuario registrado:', userData);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/job-form" element={<JobForm />} /> {/* Ruta para el componente JobForm */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
