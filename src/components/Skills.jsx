import React from 'react';

const Skills = () => {
    const hardSkills = [
        { title: 'Network Administration', items: ['Routing', 'Troubleshooting', 'BNSP Certified'] },
        { title: 'Web Development', items: ['ReactJS', 'Laravel', 'API Integration'] },
        { title: 'Cybersecurity', items: ['Cryptography', 'Digital Forensics'] },
        { title: 'Modern Tools', items: ['Docker', 'Git', 'Vercel', 'IoT Integration'] },
    ];

    const softSkills = [
        'Strategic Leadership & Team Management',
        'Legal Analysis & Organizational Regulations',
        'Public Communication & PR',
        'Problem Solving Under Pressure',
    ];

    return (
        <section id="skills" className="section container">
            <h2 style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent)', marginRight: '10px', fontSize: '1.5rem', fontFamily: 'monospace' }}>03.</span>
                Personal Skills
                <span style={{ height: '1px', background: 'var(--text-secondary)', width: '300px', marginLeft: '20px', opacity: 0.2 }}></span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                {/* Hard Skills */}
                <div>
                    <h3 style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '25px' }}>Hard Skills</h3>
                    <div style={{ display: 'grid', gap: '20px' }}>
                        {hardSkills.map((skill, index) => (
                            <div key={index} className="glass-panel" style={{ padding: '20px' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-primary)' }}>{skill.title}</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {skill.items.map((item, idx) => (
                                        <span key={idx} style={{
                                            fontSize: '0.85rem',
                                            padding: '5px 10px',
                                            border: '1px solid var(--accent)',
                                            borderRadius: '15px',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '25px' }}>Soft Skills</h3>
                    <div className="glass-panel" style={{ height: 'calc(100% - 70px)' }}> {/* Adjust height to align with hard skills title */}
                        <ul style={{ paddingLeft: '20px' }}>
                            {softSkills.map((skill, index) => (
                                <li key={index} style={{
                                    marginBottom: '20px',
                                    position: 'relative',
                                    paddingLeft: '20px'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: '8px',
                                        width: '8px',
                                        height: '8px',
                                        background: 'var(--accent)',
                                        borderRadius: '50%'
                                    }}></span>
                                    <span style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
