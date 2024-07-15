import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import '../Views/Styles/nav2.css'
import AppHeader from './AppHeader';

const Nav2 = () => {

    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <AppHeader className=""/>
                <div className="icons">
                    <Link to="/History" className="mr-3">
                        <FontAwesomeIcon icon={faUser} className="fa-icon" />
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="fa-icon" />
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Nav2;
