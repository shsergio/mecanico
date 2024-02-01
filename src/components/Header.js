import React from 'react';
import '../css/header.css'; // Asegúrate de que el archivo CSS está correctamente vinculado

const Header = () => {
  const logoUrl = "https://files.oaiusercontent.com/file-P6NgoliPziVP6mBZqzxU6q2a?se=2024-01-31T16%3A23%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5f2bc96a-5043-462e-a0be-13dbd733236c.webp&sig=6RG4arQMTr/fpNBz83Wa14jcIVURQ1Hx/YKWOzvSBZo%3D"; // Reemplaza con la URL de tu logo
  const userProfileIcon = "https://cdn.icon-icons.com/icons2/877/PNG/512/male-profile-picture_icon-icons.com_68388.png"; // Reemplaza con la URL de tu icono de perfil

  // Añadir manejo de evento para el botón de perfil si es necesario
  const handleProfileClick = () => {
    // Manejo del clic en el perfil
    console.log("Perfil clickeado");
  };

  return (
    <div className="header-container">
      <img src={logoUrl} alt="Mechaniix Pro" className="header-logo" />
      <button onClick={handleProfileClick} className="header-profile-btn">
        <img src={userProfileIcon} alt="Perfil" className="profile-icon" />
      </button>
    </div>
  );
};

export default Header;
