import React from 'react';
import AppHeader from '../Components/AppHeader';
import NavBar from '../Components/NavBar';
import Imagen from '../Components/Imagen';
import '../Views/Styles/registro.css'

const Registro = () => {
  return (
    <>
      <AppHeader />
      <NavBar />
      <Imagen />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="login-page">
          <div className="form1">
            <form className="register-form1" method="POST">
              <h2>Registrate</h2>
              <input type="text" placeholder="Full Name *" required />
              <input type="text" placeholder="Username *" required />
              <input type="email" placeholder="Email *" required />
              <input type="password" placeholder="Password *" required />
              <a className="btn3" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Create
              </a>
              <p className="message">Already registered? <a href='Login'>Sign In</a></p>
            </form>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="/js/main.js"></script>
    </>
  )
}

export default Registro
