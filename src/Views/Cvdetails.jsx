import React, { useState } from 'react';
import Nav2 from '../Components/Nav2';
import { Link, useParams } from 'react-router-dom';
import '../Views/Styles/cvdetails.css';
import jsPDF from 'jspdf';

const Cvdetails = () => {
    const {id} = useParams()
    const [cvData, setCvData] = useState({
        nombre: '',
        experienciaLaboral: '',
        estudios: '',
        habilidades: '',
        idiomas: '',
        sobreMi: '',
        contacto: '',
        herramientas: '',
        correo: '',
        direccion: '',
        foto: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'foto') {
            setCvData((prevData) => ({ ...prevData, foto: event.target.files[0] }));
        } else {
            setCvData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const colors ={
        1:[200,205,207],
        2:[219,223,224],
        3:[247,11,239],
        4:[247,148,148]
    }

    const generatePdf = () => {
        const doc = new jsPDF();
        doc.setFont('Lato Heavy', 'bold');
        doc.setFontSize(20);
        doc.text('CV', 10, 10);

        const colorselect = colors[id] || [0,0,0]
        doc.setFillColor(colorselect[0],colorselect[1],colorselect[2],colorselect[3]);
        doc.rect(0,0,100,297,'F')
        // Lado izquierdo
        if (cvData.foto) {
            const imgData = URL.createObjectURL(cvData.foto);
            doc.addImage(imgData, 'JPEG', 10, 9, 50, 50);
          }
          doc.setFont('Lora', 'bold');
          doc.setFontSize(16);
          doc.setTextColor(0, 0, 0);
          doc.text('Sobre Mi:', 10, 66);
          doc.setFontSize(10);
          doc.text(cvData.sobreMi, 10, 70, {maxWidth: 70}); 
          doc.setFontSize(16);
          doc.text('Contacto:', 10, 100);
          doc.setFontSize(10);
          doc.text(cvData.contacto, 10, 105); 
          doc.text(cvData.correo, 10, 110); 
          doc.text(cvData.direccion, 10, 116, {maxWidth:60});

        // Lado derecho
        doc.setFillColor(255, 255, 255); 
        doc.rect(100, 0, 100, 297, 'F');
        doc.setTextColor(0, 0, 0); 
        doc.setFont('Lora', 'bold');
        doc.setFontSize(16);
        doc.text('Nombre:', 100, 20);
        doc.setFontSize(10);
        doc.text(cvData.nombre, 100, 30);
        doc.setFontSize(16);
        doc.text('Experiencia Laboral:', 100, 40);
        doc.setFontSize(10);
        doc.text(cvData.experienciaLaboral, 100, 47, {maxWidth: 70});
        doc.setFontSize(16);
        doc.text('Estudios:', 100, 72);
        doc.setFontSize(10);
        doc.text(cvData.estudios, 100, 76, {maxWidth: 70});
        doc.setFontSize(16);
        doc.text('Habilidades y competencias profesionales:', 100, 100);
        doc.setFontSize(10);
        doc.text(cvData.habilidades, 100, 108, {maxWidth: 70});
        doc.setFontSize(16);
        doc.text('Idiomas:', 100, 140);
        doc.setFontSize(10);
        doc.text(cvData.idiomas, 100, 145);
        doc.setFontSize(16);
        doc.text('Herramientas:', 100, 160);
        doc.setFontSize(10);
        doc.text(cvData.herramientas, 100, 170, {maxWidth: 70});
        
        doc.save('cv.pdf');
    };

    

    return (
        <>
            <Nav2 />
            <div className="cv-details">
                <h1>Detalles del CV</h1>
                <form>
                    
                    <div>
                        <label>Foto:</label>
                        <input
                            type="file"
                            name="foto"
                            onChange={handleInputChange}
                        />
                        {cvData.foto && (
                            <img
                                src={URL.createObjectURL(cvData.foto)}
                                alt="Foto"
                                style={{ width: 100, height: 100, borderRadius: '50%' }}
                            />
                        )}
                    </div>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={cvData.nombre}
                            onChange={handleInputChange}
                            placeholder='Nombre/Apellidos'
                        />
                    </div>
                    <div>
                        <label>Experiencia Laboral:</label>
                        <input
                            type="text"
                            name="experienciaLaboral"
                            value={cvData.experienciaLaboral}
                            onChange={handleInputChange}
                            placeholder='Experiencia laboral'
                        />
                    </div>
                    <div>
                        <label>Estudios:</label>
                        <input
                            type="text"
                            name="estudios"
                            value={cvData.estudios}
                            onChange={handleInputChange}
                            placeholder='Nivel de estudios (ingenieria, licenciatura, otros)'
                        />
                    </div>
                    <div>
                        <label>Habilidades y competencias profesionales:</label>
                        <input
                            type="text"
                            name="habilidades"
                            value={cvData.habilidades}
                            onChange={handleInputChange}
                            placeholder='Habilidades y competencias'
                        />
                    </div>
                    <div>
                        <label>Idiomas:</label>
                        <input
                            type="text"
                            name="idiomas"
                            value={cvData.idiomas}
                            onChange={handleInputChange}
                            placeholder='Idiomas'
                        />
                    </div>
                    <div>
                        <label>Sobre Mi:</label>
                        <input
                            type="text"
                            name="sobreMi"
                            value={cvData.sobreMi}
                            onChange={handleInputChange}
                            placeholder='Describete'
                        />
                    </div>
                    <div>
                        <label>Herramientas de software</label>
                        <input
                            type="text"
                            name="herramientas"
                            value={cvData.herramientas}
                            onChange={handleInputChange}
                            placeholder='Lenguajes, frameworks, etc.'
                        />
                    </div>
                    <div>
                        <label>Contacto:</label>
                        <input
                            type="text"
                            name="contacto"
                            value={cvData.contacto}
                            onChange={handleInputChange}
                            placeholder='Telefono'
                        />
                        <input
                            type="text"
                            name="correo"
                            value={cvData.correo}
                            onChange={handleInputChange}
                            placeholder='Correo electronico'
                        />
                        <input
                            type="text"
                            name="direccion"
                            value={cvData.direccion}
                            onChange={handleInputChange}
                            placeholder='Domicilio' />
                    </div>
                    <button onClick={generatePdf}>Generar PDF</button>
                    <div>
                        <button><Link to='/SubIndex'>Regresar</Link></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Cvdetails;