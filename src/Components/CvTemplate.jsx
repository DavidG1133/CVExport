import React from 'react';
import '../Views/Styles/cvs.css';

const CvTemplate = ({ name, title, summary, experience, education, className }) => {
    return (
        <div className={`cv-template-container2 ${className}`}>
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>{summary}</p>
            <h4>Experience</h4>
            {experience.map((exp, index) => (
                <div key={index}>
                    <strong>{exp.role}</strong>
                    <p>{exp.company}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
            <h4>Education</h4>
            {education.map((edu, index) => (
                <div key={index}>
                    <strong>{edu.degree}</strong>
                    <p>{edu.school}</p>
                    <p>{edu.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CvTemplate;
