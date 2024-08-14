
import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Components/Alert'
import Nav2 from '../Components/Nav2';
import CvTemplate from '../Components/CvTemplate';
import cvTemplates from '../ViewModels/cvTemplates';
import '../Views/Styles/subindex.css';

const SubIndex = () => {
  return (
    <>
      <Alert />
      <Nav2 />
      <div className="subindex-container1">
        <div className="center-content1">
          <h1>¡Elige tu plantilla favorita!</h1>
          <br />
          <br />
          <p className='text'>¿No sabes cuál escoger?</p>
          <div className="cv-templates1">
            {cvTemplates.map((template) => (
              <div className="cv-container1" key={template.id}>
                <div className="cv-template1">
                  <Link to={`/cv-details/${template.id}`}>
                    <CvTemplate {...template} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SubIndex;
