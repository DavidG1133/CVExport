import React from 'react';
import Logo from './Logo'
import logoImage from '../assets/logo.jpeg';

const AppHeader = () => {
  const logoPosition = {
    top: '20px',
    left: '20px',
    width: '80px',
    height: 'auto'
  };

  return (
    <header>
      <Logo src={logoImage} alt="Logo" position={logoPosition} />
    </header>
  );
};

export default AppHeader;
