import React from 'react';
import '../css/home.css'; // Asegúrate de que el archivo CSS está correctamente vinculado
import Header from '../components/Header'; // Importa el componente Header

const Home = () => {
  return (
    <>
      <Header /> {/* El componente Header se incluye aquí */}
      <div className="home-container">
        <div className="main-banner">
          {/* Asumiendo que tienes una imagen de fondo para el banner */}
          <h1>Mechannix</h1>
        </div>
        <section className="content-section">
          <h2>Trabajos</h2>
          <div className="content-grid">
            {/* Contenido de texto aquí */}
            <div className="content-block">
              <p>Lorem ipsum...</p>
            </div>
            <div className="content-block">
              <p>Lorem ipsum...</p>
            </div>
            <div className="content-block">
              <p>Lorem ipsum...</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
