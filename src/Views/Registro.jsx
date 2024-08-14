import React, { useState } from 'react';
import AppHeader from '../Components/AppHeader';
import NavBar from '../Components/NavBar';
import Imagen from '../Components/Imagen';
import '../Views/Styles/registro.css';
import Swal from 'sweetalert2';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const usuario = {
      nombre,
      username,
      email,
      contra: password,
    };
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });
    const data = await response.json();
    if (data.status === "Ok") {
      Swal.fire({
        title: 'Éxito',
        text: 'Usuario creado exitosamente',
        icon: 'success',
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Error al crear usuario',
        icon: 'error',
      });
    }
  };

  return (
    <>
      <AppHeader />
      <NavBar />
      <Imagen />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="login-page">
          <div className="form1">
            <form className="register-form1" method="POST" onSubmit={handleSubmit}>
              <h2>Registrate</h2>
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
              <input
                type="text"
                placeholder="Username *"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <input
                type="email"
                placeholder="Email *"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password *"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button className="btn-custom1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Create
              </button>
              <p className="message">
                Already registered? <a href="Login">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="/js/main.js"></script>
    </>
  );
};

export default Registro;