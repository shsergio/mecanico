import React, { useState } from 'react';
import '../css/seguimiento.css';
import Header from '../components/Header';

const Seguimiento = () => {
  const [jobState, setJobState] = useState('En progreso');
  const [progress, setProgress] = useState(0);

  const handleStart = () => {
    setJobState('En progreso');
  };

  const handlePause = () => {
    setJobState('Pausado');
  };

  const handleFinish = () => {
    setJobState('Finalizado');
  };

  const handleProgress = (amount) => {
    if (jobState !== 'Finalizado' && progress + amount <= 100) {
      setProgress(progress + amount);
    }
  };

  const handleProfileClick = () => {
    console.log('Perfil clickeado');
  };

  return (
    <div>
      <Header handleProfileClick={handleProfileClick} />
      <h2 className="seguimiento-title">Seguimiento del trabajo</h2>
      <div className="gracias-enmarcado">
        <p className="gracias-text">¡Gracias por tener confianza! Aquí podrá tener el seguimiento de su trabajo. Para cualquier duda envía correo a ejemplo@gmail.com</p>
      </div>
      <div className="seguimiento-container">
        <div className="job-state">
          <h3>Estado del trabajo:</h3>
          <p>{jobState}</p>
        </div>
        <div className="job-progress">
          <h3>Progreso:</h3>
          <progress value={progress} max="100"></progress>
          <p>{progress}%</p>
        </div>
        <div className="job-buttons">
          <button onClick={handleStart} disabled={jobState !== 'Pausado'}>
            Iniciar
          </button>
          <button onClick={handlePause} disabled={jobState !== 'En progreso'}>
            Pausar
          </button>
          <button onClick={handleFinish} disabled={jobState !== 'En progreso'}>
            Finalizar
          </button>
          <button onClick={() => handleProgress(5)} disabled={jobState !== 'En progreso'}>
            Avanzar 5%
          </button>
          <button onClick={() => handleProgress(10)} disabled={jobState !== 'En progreso'}>
            Avanzar 10%
          </button>
          <button onClick={() => handleProgress(20)} disabled={jobState !== 'En progreso'}>
            Avanzar 20%
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seguimiento;