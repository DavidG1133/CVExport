import React from 'react';
import { useNavigate } from 'react-router-dom';
import cv1 from '../assets/cv1.pdf'
import cv2 from '../assets/cv2.pdf'
import cv3 from '../assets/cv3.pdf'
import cv4 from '../assets/cv4.pdf'

const cvstr1 = cv1
const cvstr2 = cv2
const cvstr3 = cv3
const cvstr4 = cv4

const cvs = [
    { id: 1, preview: cvstr1 },
    { id: 2, preview: cvstr2 },
    { id: 3, preview: cvstr3 },
    { id: 4, preview: cvstr4 },
];

const CvList = () => {
    const navigate = useNavigate();
    

    const handleEdit = (cv) => {
        navigate(`/cv-details/${(cv.id)}`);
    };

    return (
        <div className="cv-templates1">
            {cvs.map((cv) => (
                <div key={(cv.id)} className="cv-template1">
                    <object data={(cv.preview)} type="application/pdf" width="100%" height="100%"></object>
                    <button className="edit-button" onClick={() => handleEdit(cv)}>Editar</button>
                </div>
            ))}
        </div>
    );
    
};


export {cvs};
export default CvList;
