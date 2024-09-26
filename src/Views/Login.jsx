import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Imagen from '../Components/Imagen';
import NavBar from '../Components/NavBar';
import AppHeader from '../Components/AppHeader';
import '../Views/Styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Por favor, llene todos los campos');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/login1?username=${username}&password=${password}`);
      const data = await response.json();
      if (data.status === "Ok") {
        navigate('/SubIndex');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      setError('Error al autenticar');
    }
  };

  return (
    <>
      <AppHeader />
      <NavBar />
      <Imagen />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="login-page-custom">
          <div className="form-custom">
            <form className="login-form-custom" method="get" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button className="btn-custom1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign in
              </button>
              <p className="message-custom">
                Not registered? <a href='Registro'>Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );

};

export default Login;