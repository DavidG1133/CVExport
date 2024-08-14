<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CvTemplate from '../Components/CvTemplate';
import cvTemplates from '../ViewModels/cvTemplates';
import '../Views/Styles/cvdetails.css';
import Nav2 from '../Components/Nav2';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Cvdetails = () => {
    const { id } = useParams();
    const [cvData, setCvData] = useState({
        name: '',
        title: '',
        summary: '',
        experience: [],
        education: []
    });

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/preview', { state: { cvData } });
    };

    

    useEffect(() => {
        const template = cvTemplates.find(t => t.id === parseInt(id));
        if (template) {
            setCvData(template);
        }
    }, [id]);

    const handleChange = (e, index, type) => {
        const { name, value } = e.target;
        setCvData(prevState => ({
            ...prevState,
            [type]: prevState[type].map((item, i) => i === index ? { ...item, [name]: value } : item)
        }));
    };

    const handleChange2 = (e, name) => {
        const { value } = e.target;
        setCvData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const addField = (type) => {
        const newItem = {
            id: Date.now(),
            role: '',
            company: '',
            description: ''
        };

        const cleanNewItem = {
            id: newItem.id,
            role: newItem.role,
            company: newItem.company,
            description: newItem.description
        };

        setCvData(prevState => ({
            ...prevState,
            [type]: [...prevState[type], cleanNewItem]
        }));
    };


    const removeField = (index, type) => {
        setCvData(prevState => ({
            ...prevState,
            [type]: prevState[type].filter((item, i) => i !== index)
        }));
    };

    if (!cvData) {
        return <div>Loading...</div>;
>>>>>>> 046c207eff653c7c9795c50573922c04314fcbf3
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
<<<<<<< HEAD
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
=======
            <div className="cv-details-container" >
                <div className="cv-form">
                    <h2 className='titulo'>Edita tu CV</h2>
                    <label>
                        Nombre:
                        <input type="text" name="name" value={cvData.name} onChange={(e) => handleChange2(e, 'name', 'cvData')} />
                    </label>
                    <label>
                        Titulo:
                        <input type="text" name="title" value={cvData.title} onChange={(e) => handleChange2(e, 'title', 'cvData')} />
                    </label>
                    <label>
                        Descripcion:
                        <textarea name="summary" value={cvData.summary} onChange={(e) => handleChange2(e, 'summary', 'cvData')} />
                    </label>
                </div>

                <div className="cv-section">
                    <h4>Experiencia laboral</h4>
                    {cvData.experience && cvData.experience.map((item, index) => (
                        <div className="cv-field" key={item.id}>
                            <label>
                                Rol:
                                <input
                                    type="text"
                                    name="role"
                                    value={item.role}
                                    onChange={(e) => handleChange(e, index, 'experience')}
                                />
                            </label>
                            <label>
                                Compañias:
                                <input
                                    type="text"
                                    name="company"
                                    value={item.company}
                                    onChange={(e) => handleChange(e, index, 'experience')}
                                />
                            </label>
                            <label>
                                Descripcion:
                                <textarea
                                    name="description"
                                    value={item.description}
                                    onChange={(e) => handleChange(e, index, 'experience')}
                                />
                            </label>
                            <button className="btn-remove" onClick={() => removeField(index, 'experience')}>Eliminar</button>
                        </div>
                    ))}
                    <button className="btn-add" onClick={() => addField('experience')}>Agregar campo</button>
                </div>

                <div className="cv-section">
                    <h4>Educacion</h4>
                    {cvData.education && cvData.education.map((item, index) => (
                        <div className="cv-field" key={item.id}>
                            <label>
                                Grado:
                                <input
                                    type="text"
                                    name="degree"
                                    value={item.degree}
                                    onChange={(e) => handleChange(e, index, 'education')}
                                />
                            </label>
                            <label>
                                Inf. escolar:
                                <input
                                    type="text"
                                    name="school"
                                    value={item.school}
                                    onChange={(e) => handleChange(e, index, 'education')}
                                />
                            </label>
                            <label>
                                Descripcion:
                                <textarea
                                    name="description"
                                    value={item.description}
                                    onChange={(e) => handleChange(e, index, 'education')}
                                />
                            </label>
                            <button className="btn-remove" onClick={() => removeField(index, 'education')}>Eliminar</button>
                        </div>
                    ))}
                    <button className="btn-add" onClick={() => addField('education')}>Agregar campo</button>
                </div>

                <div className="cv-template-section">
                    <CvTemplate {...cvData} className="cv-details" />
                </div>

                <Link to='/SubIndex'><button className="btn-back" >Volver</button></Link>
                <button onClick={handleNext} className="next-button">Siguiente</button>
>>>>>>> 046c207eff653c7c9795c50573922c04314fcbf3
            </div>
        </>
    );
};

<<<<<<< HEAD
export default Cvdetails;
=======
export default Cvdetails;
>>>>>>> 046c207eff653c7c9795c50573922c04314fcbf3
