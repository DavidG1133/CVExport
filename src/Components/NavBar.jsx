import React, { useState } from 'react';
import '../Views/Styles/navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='navbar1'>
            <div className='navbar-toggle' onClick={toggleMenu}>
                &#9776;
            </div>
            <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                <Link to='/'>Inicio </Link>
                <Link to='/login'> Iniciar sesión </Link>
                <Link to='/Registro'> Registro</Link>
            </div>
        </nav>
    )
}

export default NavBar;
