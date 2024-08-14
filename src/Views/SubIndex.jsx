<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
=======
import React from 'react';
<<<<<<< HEAD
import Alert from '../Components/Alert';
import Nav2 from '../Components/Nav2';
import '../Views/Styles/subindex.css';
import CvList from '../ViewModels/CvList';
=======
import { Link } from 'react-router-dom';
import Alert from '../Components/Alert'
import Nav2 from '../Components/Nav2';
import CvTemplate from '../Components/CvTemplate';
import cvTemplates from '../ViewModels/cvTemplates';
import '../Views/Styles/subindex.css';
>>>>>>> 046c207eff653c7c9795c50573922c04314fcbf3
>>>>>>> Frontend

const SubIndex = () => {
  return (
    <>
      <Alert />
      <Nav2 />
      <div className="subindex-container1">
        <div className="center-content1">
          <h1>¡Elige tu plantilla favorita!</h1>
<<<<<<< HEAD
          <p className="text">¿No sabes cuál escoger?</p>
          <div className="cv-templates1">
            <CvList />
=======
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
>>>>>>> 046c207eff653c7c9795c50573922c04314fcbf3
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> 046c207eff653c7c9795c50573922c04314fcbf3

export default SubIndex;
