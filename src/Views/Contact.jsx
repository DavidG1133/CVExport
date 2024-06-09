import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import Imagen from '../Components/Imagen';
import AppHeader from '../Components/AppHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import '../Styles/contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Puedes hacer lo que quieras con los datos del formulario, por ejemplo, enviarlos a un servidor
    };

    return (
        <>
            <AppHeader />
            <NavBar />
            <Imagen />

            <div className='container1'>
                <div className='card-header1'>
                    <div className='col-lg-4 col-md-6 col-xs-12'>
                        <p>
                            Aquí podrás contactarnos para hacer sugerencias o dejarnos algun comentario de retroalimentación para mejorar. Tu opinión es muy importante para nosotros y nos ayuda a seguir mejorando. <b>Contáctanos</b> para obtener mas información, hacer sugerencias o recibir asistencia personalizada.
                        </p>
                    </div>
                </div>
                <div className='contact-form-container'>
                    <form onSubmit={handleSubmit} className='contact-form'>
                        <div>
                            <label htmlFor="name">Nombre:</label><br />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Correo:</label><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label htmlFor="comment">Comentario:</label><br />
                            <textarea
                                id="comment"
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                rows="4"
                                required
                                className="input-field"
                            />
                        </div>
                        <div>
                            <button type="submit" className="submit-button">ENVIAR</button>
                        </div>
                    </form>
                </div>
            </div>


            <div className="icon-container">
                <div>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
                    <div className="text-container">
                        <span>Via E-mail:</span>
                        <span>correo@gmail.com</span>
                    </div>
                </div>
            </div>


            <div className='icon-container1'>
                <div>
                    <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                    <div className='text-container'>
                        <span>Por Teléfono: </span>
                        <span>11-111-111</span>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Contact;
