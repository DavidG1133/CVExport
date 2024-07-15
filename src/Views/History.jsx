import React from 'react'
import Nav2 from '../Components/Nav2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import '../Views/Styles/historial.css'


const History = () => {
    return (
        <>
            <Nav2 />
            <div className="div-container">      
                <Link to="/SubIndex" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <div className="card2">
                    <div className="card-body2">
                        <h5 className="card-title2">Imagen</h5>
                        <p className="card-text2">Historial</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default History