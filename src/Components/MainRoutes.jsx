import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from '../Screens/Index'
import Contact from '../Screens/Contact'
import Login from '../Screens/Login'
import Registro from '../Screens/Registro'


const MainRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<Index/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Registro' element={<Registro/>}></Route>
            </Routes>
    )
}

export default MainRoutes
