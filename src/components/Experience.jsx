import React, { useState } from 'react';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = [
        {
            type: 'Work',
            role: 'Field Support',
            organization: 'ICON+ (PLN Group)',
            period: 'Field Work',
            details: [
                'Responsible for telecommunication network infrastructure maintenance.',
                'Configured routing devices and optimized client connectivity.',
                'Handled hardware and software network troubleshooting in the field.'
            ]
        },
        {
            type: 'Organization',
            role: 'Member of Commission II (Law)',
            organization: 'DPM Telkom University Surabaya',
            period: '2025 Period',
            details: [
                'Supervising internal regulations.',
                'Formulating student organization legal products.'
            ]
        },
        {
            type: 'Organization',
            role: 'Public Relations',
            organization: 'DPM Telkom University Surabaya',
            period: '2025 Period',
            details: [
                'Managing information flow.',
                'Maintaining good relations between the organization and external parties.'
            ]
        }
    ];

    return (
        <section id="experience" className="section container" style={{ maxWidth: '900px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent)', marginRight: '10px', fontSize: '1.5rem', fontFamily: 'monospace' }}>05.</span>
                Experience
                <span style={{ height: '1px', background: 'var(--text-secondary)', width: '300px', marginLeft: '20px', opacity: 0.2 }}></span>
            </h2>

            <div style={{ display: 'flex', marginTop: '50px', gap: '50px' }}>
                {/* Tabs */}
                <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid rgba(136, 146, 176, 0.2)' }}>
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            style={{
                                background: activeTab === index ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                                border: 'none',
                                borderLeft: activeTab === index ? '2px solid var(--accent)' : '2px solid transparent',
                                color: activeTab === index ? 'var(--accent)' : 'var(--text-secondary)',
                                padding: '15px 20px',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-main)',
                                fontSize: '1rem',
                                transition: 'var(--transition)',
                                marginLeft: '-2px', // Align border
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {exp.organization.split(' ')[0]}...
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minHeight: '300px' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '5px' }}>
                        {experiences[activeTab].role} <span style={{ color: 'var(--accent)' }}>@ {experiences[activeTab].organization}</span>
                    </h3>
                    <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                        {experiences[activeTab].period}
                    </p>
                    <ul style={{ paddingLeft: '0' }}>
                        {experiences[activeTab].details.map((detail, index) => (
                            <li key={index} style={{
                                position: 'relative',
                                paddingLeft: '30px',
                                marginBottom: '10px',
                                color: 'var(--text-secondary)'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '10px',
                                    width: '0',
                                    height: '0',
                                    borderTop: '6px solid transparent',
                                    borderBottom: '6px solid transparent',
                                    borderLeft: '8px solid var(--accent)'
                                }}></span>
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
