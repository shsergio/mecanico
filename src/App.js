import React from 'react';
import Login from './page/login';

const App = () => {
  const handleLogin = (userData) => {
    console.log('Usuario autenticado:', userData);
  };

  return (
    <div className="app-container">
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default App;
