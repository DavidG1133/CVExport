import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../Views/Index';
import Login from '../Views/Login';
import Registro from '../Views/Registro';
import SubIndex from '../Views/SubIndex';
import Cvdetails from '../Views/Cvdetails';


const MainRoutes = () => {
    return (
      
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Registro' element={<Registro />} />
                <Route path='/SubIndex' element={<SubIndex />} />
                <Route path='/cv-details/:id' element={<Cvdetails />} />
            </Routes>
      
    );
};

export default MainRoutes;
