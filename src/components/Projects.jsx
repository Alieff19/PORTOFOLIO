import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Don Pablo Flashsale',
            desc: 'High-concurrency fast transaction simulation system.',
            tags: ['Concurrency', 'Backend', 'Simulation']
        },
        {
            title: 'Secure QR Vault',
            desc: 'Encrypted data storage accessed via unique QR Code authentication.',
            tags: ['Cryptography', 'Security', 'QR Code']
        },
        {
            title: 'Madura Store',
            desc: 'E-commerce platform for local MSME digitalization with real-time inventory.',
            tags: ['E-commerce', 'Real-time', 'Web']
        },
        {
            title: 'Pemira (E-Voting)',
            desc: 'Digital voting application prioritizing data integrity and transparency.',
            tags: ['Fullstack', 'Security', 'Voting']
        },
        {
            title: 'Moodmeal',
            desc: 'Smart culinary recommendation app based on user mood analysis.',
            tags: ['AI/ML', 'Mobile/Web', 'Algorithm']
        },
    ];

    return (
        <section id="projects" className="section container">
            <h2 style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent)', marginRight: '10px', fontSize: '1.5rem', fontFamily: 'monospace' }}>06.</span>
                Project Portfolio
                <span style={{ height: '1px', background: 'var(--text-secondary)', width: '300px', marginLeft: '20px', opacity: 0.2 }}></span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '50px' }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass-panel" style={{
                        padding: '30px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '20px'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{project.desc}</p>
                        </div>

                        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                            {project.tags.map((tag, idx) => (
                                <span key={idx} style={{
                                    color: 'var(--text-secondary)',
                                    fontFamily: 'monospace',
                                    fontSize: '0.8rem'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
