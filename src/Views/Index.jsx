import React from 'react'
import '../Views/Styles/styleI.css'
import fondo from '../assets/fondo3.jpeg'
import Imagen from '../Components/Imagen'
import NavBar from '../Components/NavBar'
import AppHeader from '../Components/AppHeader'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <>
    <AppHeader/>
    <NavBar></NavBar>
    <Imagen />
    <div className='container'>
        <div className='image-container'>
          <img src={fondo} alt='fondo' className='image' />
        </div>
        <div className='card-container'>
          <div className='card card-info'>
            <div className='card-header'>
              <h1>¡A TU ALCANCE!</h1>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-lg-4 col-md-6 col-xs-12'>
                  <p>
                    A través de este sitio web encontrarás diversas plantillas y recursos que te serán útiles para desarrollar tu propio CV, con un enfoque de diversidad y personalización. Explora las opciones disponibles y descubre cómo puedes presentar tu experiencia y habilidades de manera impactante y profesional.
                  </p>
                </div>
              </div>
            </div>
            <div className='card-footer'>
              <button className='btn'> <a className='textocolor' href='#'>DESCÚBRELO</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
