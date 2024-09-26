import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import '../Views/Styles/nav2.css'
import AppHeader from './AppHeader';

const Nav2 = () => {
    return (
        <>
            <nav className="navbar2 navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <AppHeader />
                    <div className="navbar-nav ml-auto" >
                        <div className="icons">
                            <Link to="/" className="nav-link">
                                <FontAwesomeIcon icon={faArrowRight} className="fa-icon" title='Salir'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav2;
