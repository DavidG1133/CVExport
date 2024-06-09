import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../Views/Index'
import Contact from '../Views/Contact'
import Login from '../Views/Login'
import Registro from '../Views/Registro'
import SubIndex from '../Views/SubIndex'


const Mainrutes = () => {
  return (
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Registro' element={<Registro/>}/>
            <Route path='/SubIndex' element={<SubIndex/>}/>
        </Routes>
  )
}

export default Mainrutes