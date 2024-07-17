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
    }

    return (
        <>
            <Nav2 />
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
            </div>
        </>
    );
};

export default Cvdetails;
