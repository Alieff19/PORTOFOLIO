import React from 'react';

const About = () => {
    return (
        <section id="about" className="section container">
            <h2 style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                <span style={{ color: 'var(--accent)', marginRight: '10px', fontSize: '1.5rem', fontFamily: 'monospace' }}>01.</span>
                About Me
                <span style={{ height: '1px', background: 'var(--text-secondary)', width: '300px', marginLeft: '20px', opacity: 0.2 }}></span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px', marginTop: '40px' }}>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    <p>
                        Hello! My name is <span style={{ color: 'var(--accent)' }}>M. Alief Alfaridzi</span> and I am an Informatics Student at Telkom University Surabaya. As a Full OPES Scholarship Recipient and the Best Graduate from SMK Telkom Banjarbaru, I have a high dedication to exploring technological solutions.
                    </p>
                    <p>
                        With a <span style={{ color: 'var(--accent)' }}>GPA of 3.94</span>, I balance academic excellence with practical field experience as Field Support at ICON+ and strategic roles in student legislative organizations.
                    </p>
                    <p>
                        My focus is integrating robust network infrastructure with innovative software development.
                    </p>
                </div>

                <div className="glass-panel" style={{ textAlign: 'center' }}>
                    {/* Placeholder for Profile Image if user provides one later */}
                    <div style={{
                        width: '200px',
                        height: '200px',
                        margin: '0 auto 20px',
                        background: 'rgba(100, 255, 218, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid var(--accent)'
                    }}>
                        <span style={{ fontSize: '3rem', color: 'var(--accent)' }}>MAA</span>
                    </div>
                    <p style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>M. Alief Alfaridzi</p>
                    <p style={{ fontSize: '0.9rem' }}>Informatics Student | Network Specialist</p>
                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.8rem', padding: '5px 10px', background: 'var(--bg-light)', borderRadius: '10px' }}>GPA 3.94</span>
                        <span style={{ fontSize: '0.8rem', padding: '5px 10px', background: 'var(--bg-light)', borderRadius: '10px' }}>OPES Awardee</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
