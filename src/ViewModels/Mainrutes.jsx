import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../Views/Index';
<<<<<<< HEAD
import Login from '../Views/Login';
import Registro from '../Views/Registro';
import SubIndex from '../Views/SubIndex';
import Cvdetails from '../Views/Cvdetails';

=======
import Contact from '../Views/Contact';
import Login from '../Views/Login';
import Registro from '../Views/Registro';
import SubIndex from '../Views/SubIndex';
import History from '../Views/History';
import Cvdetails from '../Views/Cvdetails';
import Preview from '../Views/Preview';
>>>>>>> 046c207eff653c7c9795c50573922c04314fcbf3

const MainRoutes = () => {
    return (
      
            <Routes>
                <Route path='/' element={<Index />} />
<<<<<<< HEAD
                <Route path='/Login' element={<Login />} />
                <Route path='/Registro' element={<Registro />} />
                <Route path='/SubIndex' element={<SubIndex />} />
                <Route path='/cv-details/:id' element={<Cvdetails />} />
=======
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Registro' element={<Registro />} />
                <Route path='/SubIndex' element={<SubIndex />} />
                <Route path='/History' element={<History />} />
                <Route path='/cv-details/:id' element={<Cvdetails />} />
                <Route path='/preview' element={<Preview/>}/>
>>>>>>> 046c207eff653c7c9795c50573922c04314fcbf3
            </Routes>
      
    );
};

export default MainRoutes;
