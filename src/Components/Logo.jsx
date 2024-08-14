import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import '../Views/Styles/logo.css'; // Importa el archivo CSS
=======
<<<<<<< HEAD
import '../Views/Styles/logo.css';
=======
import '../Views/Styles/logo.css'; // Importa el archivo CSS
>>>>>>> 046c207eff653c7c9795c50573922c04314fcbf3
>>>>>>> Frontend

const Logo = ({ src, alt, position }) => {
  const logoStyle = {
    position: 'absolute',
    ...position
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      className='logo-image'
      style={{
        ...logoStyle, 
        width: 'auto', 
        height: 'auto', 
        left:'50px',
        maxWidth: '100%', 
        maxHeight: '20%',
      }} 
    />
  );
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  position: PropTypes.object
};

Logo.defaultProps = {
  position: {
    top: '10px',
    left: '10px',
    width: '50px', 
    height: 'auto'
  }
};

export default Logo;
