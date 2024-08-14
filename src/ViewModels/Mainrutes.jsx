import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../Views/Index';
import Contact from '../Views/Contact';
import Login from '../Views/Login';
import Registro from '../Views/Registro';
import SubIndex from '../Views/SubIndex';
import History from '../Views/History';
import Cvdetails from '../Views/Cvdetails';
import Preview from '../Views/Preview';

const MainRoutes = () => {
    return (
      
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Registro' element={<Registro />} />
                <Route path='/SubIndex' element={<SubIndex />} />
                <Route path='/History' element={<History />} />
                <Route path='/cv-details/:id' element={<Cvdetails />} />
                <Route path='/preview' element={<Preview/>}/>
            </Routes>
      
    );
};

export default MainRoutes;
