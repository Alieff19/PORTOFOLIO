import React from 'react';

const Education = () => {
    const educationData = [
        {
            school: 'Telkom University Surabaya',
            period: '2023 - Present',
            degree: 'Bachelor of Informatics',
            gpa: '3.94 / 4.00',
            highlight: 'OPES Full Scholarship Recipient',
        },
        {
            school: 'SMK Telkom Banjarbaru',
            period: '2020 - 2023',
            degree: 'Computer & Network Engineering',
            result: 'Final Score: 91.38',
            highlight: 'Best Graduate of the Study Program',
        },
    ];

    return (
        <section id="education" className="section container">
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', textAlign: 'right' }}>
                <span style={{ height: '1px', background: 'var(--text-secondary)', width: '300px', marginRight: '20px', opacity: 0.2 }}></span>
                Education Background
                <span style={{ color: 'var(--accent)', marginLeft: '10px', fontSize: '1.5rem', fontFamily: 'monospace' }}>04.</span>
            </h2>

            <div style={{ maxWidth: '800px', margin: '50px auto 0', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'var(--text-secondary)',
                    opacity: 0.2,
                    transform: 'translateX(-50%)'
                }}></div>

                {educationData.map((edu, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                        marginBottom: '50px',
                        position: 'relative'
                    }}>
                        {/* Timeline Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '20px',
                            width: '16px',
                            height: '16px',
                            background: 'var(--bg-dark)',
                            border: '2px solid var(--accent)',
                            borderRadius: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 2
                        }}></div>

                        <div className="glass-panel" style={{
                            width: '45%',
                            position: 'relative',
                            padding: '25px'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '5px' }}>{edu.school}</h3>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '15px' }}>{edu.period}</p>
                            <p style={{ marginBottom: '5px', color: 'var(--text-secondary)' }}>{edu.degree}</p>
                            {edu.gpa && <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>GPA: {edu.gpa}</p>}
                            {edu.result && <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>{edu.result}</p>}
                            <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--accent)' }}>{edu.highlight}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
