import React from 'react';
import Imagen from '../Components/Imagen';
import NavBar from '../Components/NavBar';
import AppHeader from '../Components/AppHeader';
import '../Views/Styles/login.css'
import { Link } from 'react-router-dom';

const Registro = () => {
  return (
    <>
      <AppHeader />
      <NavBar />
      <Imagen />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="login-page-custom">
          <div className="form-custom">
            <form className="login-form-custom" method="post">
              <h2>Login</h2>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <Link to='../SubIndex'>
              <button className="btn-custom1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign in
              </button>
              </Link>
              <p className="message-custom">Not registered? <a href='Registro'>Create an account</a></p>
            </form>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="/js/main.js"></script>
    </>
  );
}

export default Registro;
