import React from 'react'

const Fondo = () => {
    const overlayStyle = {
        position: 'fixed', // Asegura que el componente ocupe toda la pantalla
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#5FCB9F', // Color de fondo con transparencia
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    return (
        <div style={overlayStyle}>
            <h1 style={{ color: 'white' }}>Componente de Pantalla Completa</h1>
            {}
        </div>
    )
}

export default Fondo