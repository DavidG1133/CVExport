import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Alert = () => {
    useEffect(() => {
        Swal.fire({
            title: '<strong>¡Espera! ¡No te vayas aún!</strong>',
            icon: 'info',
            html: "<p style='text-align: center'>Estás a un paso del trabajo de tus sueños</p>",
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: 'Continuar',
        });
    }, []);

    return (
        <></>
    );
};

export default Alert;
