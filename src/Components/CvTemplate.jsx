import React from 'react';
import '../Views/Styles/cvs.css';

const CVTemplate = ({ name, title, summary, experience, education }) => {
    return (
        <div className="cv-template-container1">
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>{summary}</p>
            <h4>Experience</h4>
            {experience.map((exp, index) => (
                <div key={index}>
                    <strong>{exp.role}</strong> at {exp.company}
                    <p>{exp.description}</p>
                </div>
            ))}
            <h4>Education</h4>
            {education.map((edu, index) => (
                <div key={index}>
                    <strong>{edu.degree}</strong> from {edu.school}
                    <p>{edu.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CVTemplate
