import React from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf'; // Importa jsPDF 
import 'jspdf-autotable'; // Importa jspdf-autotable
import '../Views/Styles/preview.css';
import Nav2 from '../Components/Nav2';
import { Link } from 'react-router-dom';

const Preview = () => {
    const location = useLocation();
    const { cvData } = location.state || {};

    const exportPDF = () => {
        const doc = new jsPDF();
        doc.text(cvData.name, 10, 10);
        doc.text(cvData.title, 10, 20);
        doc.text(cvData.summary, 10, 30);

        // Añadir experiencia
        let yOffset = 40;
        doc.text('Experiencia', 10, yOffset);
        yOffset += 10;
        cvData.experience.forEach(exp => {
            doc.text(`${exp.role} at ${exp.company}`, 10, yOffset);
            yOffset += 10;
            doc.text(exp.description, 10, yOffset);
            yOffset += 10;
        });

        // Añadir educación
        yOffset += 10;
        doc.text('Educación', 10, yOffset);
        yOffset += 10;
        cvData.education.forEach(edu => {
            doc.text(`${edu.degree} from ${edu.school}`, 10, yOffset);
            yOffset += 10;
            doc.text(edu.description, 10, yOffset);
            yOffset += 10;
        });

        doc.save('cv.pdf');
    };

    const shareWhatsapp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent('Mira mi CV: ' + JSON.stringify(cvData))}`;
        window.open(url, '_blank');
    };

    const shareLinkedIn = () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('Mira mi CV: ' + JSON.stringify(cvData))}`;
        window.open(url, '_blank');
    };

    return (
        <>
        <Nav2/>
        <div className="preview-container">
            <div className="preview-left">
                <h2>Preview del CV</h2>
                <div className="cv-preview">
                    <h3>{cvData?.name}</h3>
                    <h4>{cvData?.title}</h4>
                    <p>{cvData?.summary}</p>
                    <h5>Experiencia</h5>
                    {cvData?.experience?.map((exp, index) => (
                        <div key={index}>
                            <strong>{exp.role}</strong> at {exp.company}
                            <p>{exp.description}</p>
                        </div>
                    ))}
                    <h5>Educación</h5>
                    {cvData?.education?.map((edu, index) => (
                        <div key={index}>
                            <strong>{edu.degree}</strong> from {edu.school}
                            <p>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="preview-right">
                <button className="preview-button" onClick={exportPDF}>Exportar como PDF</button>
                <button className="preview-button" onClick={shareWhatsapp}>Compartir por Whatsapp</button>
                <button className="preview-button" onClick={shareLinkedIn}>Compartir en LinkedIn</button>
            </div>
            <Link to='/SubIndex'><button className="btn-back" >Volver</button></Link>

        </div>
        </>
    );
};

export default Preview;
