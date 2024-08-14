import React from 'react';
import Alert from '../Components/Alert';
import Nav2 from '../Components/Nav2';
import '../Views/Styles/subindex.css';
import CvList from '../ViewModels/CvList';

const SubIndex = () => {
  return (
    <>
      <Alert />
      <Nav2 />
      <div className="subindex-container1">
        <div className="center-content1">
          <h1>¡Elige tu plantilla favorita!</h1>
          <p className="text">¿No sabes cuál escoger?</p>
          <div className="cv-templates1">
            <CvList />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubIndex;
