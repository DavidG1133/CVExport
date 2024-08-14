import React from 'react';
import Nav2 from '../Components/Nav2';
import { Link } from 'react-router-dom';
import '../Views/Styles/historial.css';

const History = () => {

    const cvHistories = [
        { id: 1, name: 'CV de Juan', description: 'Última actualización: 01/07/2024' },
        { id: 2, name: 'CV de María', description: 'Última actualización: 15/06/2024' },
        
    ];

    return (
        <>
            <Nav2 />
            <div className="div-container">
                <h2>Historial de CVs</h2>
                <div className="cv-histories">
                    {cvHistories.map(cv => (
                        <div key={cv.id} className="card2">
                            <div className="card-body2">
                                <h5 className="card-title2">{cv.name}</h5>
                                <p className="card-text2">{cv.description}</p>
                                <Link to={`/cvdetails/${cv.id}`} className="boton">Ver CV</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/SubIndex" ><button className="back-button">Volver</button></Link>
            </div>
        </>
    );
};

export default History;
