import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/trabajos.css';

function Trabajos() {
  return (
    <div>
      <Header handleProfileClick={() => console.log('Perfil clickeado')} />
      <h2 className="seguimiento-title">Lista de trabajo</h2>
      <div className="gracias-enmarcado">
        <p className="gracias-text">¡Gracias por tener confianza! Aquí podrá tener el seguimiento de su trabajo. Para cualquier duda envía correo a ejemplo@gmail.com</p>
      </div>
      <div className="button-container">
        <Link to="/seguimiento" className="button-link">Trabajo 1</Link>
        <Link to="/seguimiento" className="button-link">Trabajo 2</Link>
        <Link to="/seguimiento" className="button-link">Trabajo 3</Link>
      </div>
    </div>
  );
}

export default Trabajos;
