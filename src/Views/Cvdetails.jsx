import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CvTemplate from '../Components/CvTemplate'
import cvTemplates from '../ViewModels/cvTemplates'
import '../Views/Styles/cvdetails.css'

const Cvdetails = () => {

    const { id } = useParams();
    const [cvData, setCvData] = useState(null)

    useEffect(() => {
        const template = cvTemplates.find(t => t.id === parseInt(id));
        setCvData(template);
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCvData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    if (!cvData) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="cv-details-container">
                <div className="cv-form">
                    <h2>Edit Your CV</h2>
                    <label>
                        Name:
                        <input type="text" name="name" value={cvData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Title:
                        <input type="text" name="title" value={cvData.title} onChange={handleChange} />
                    </label>
                    <label>
                        Summary:
                        <textarea name="summary" value={cvData.summary} onChange={handleChange} />
                    </label>

                </div>
                <CvTemplate {...cvData} />
            </div>
        </>
    )
}

export default Cvdetails