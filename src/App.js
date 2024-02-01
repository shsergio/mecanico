import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/login';
import Register from './page/Register';
import Home from './page/Home';
import JobForm from './page/JobForm';
import ConsultarTrabajos from './page/ConsultarTrabajos';
import Detalles from './page/Detalles';
import Seguimiento from './page/Seguimiento';
import Trabajos from './page/Trabajos';

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
          <Route path="/job-form" element={<JobForm />} />
          <Route path="/consultartrabajos" element={<ConsultarTrabajos />} />
          <Route path="/detalles/:id" element={<Detalles />} />
          <Route path="/seguimiento" element={<Seguimiento />} />
          <Route path="/trabajos" element={<Trabajos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;