import React from 'react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px' // Offset for fixed navbar
        }}>
            <div className="container" style={{ textAlign: 'left' }}>
                <h4 className="fade-in" style={{
                    color: 'var(--accent)',
                    fontFamily: 'monospace',
                    fontSize: '1.2rem',
                    marginBottom: '20px',
                    animationDelay: '0.1s'
                }}>
                    Hi, my name is
                </h4>
                <h1 className="fade-in" style={{
                    fontSize: 'clamp(40px, 8vw, 80px)',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1.1,
                    marginBottom: '10px',
                    animationDelay: '0.2s'
                }}>
                    M. Alief Alfaridzi.
                </h1>
                <h2 className="fade-in" style={{
                    fontSize: 'clamp(30px, 7vw, 70px)',
                    color: 'var(--text-secondary)',
                    fontWeight: 700,
                    animationDelay: '0.3s'
                }}>
                    Informatics Student.
                </h2>
                <p className="fade-in" style={{
                    maxWidth: '600px',
                    marginTop: '20px',
                    fontSize: '1.2rem',
                    animationDelay: '0.4s'
                }}>
                    I am a Software Engineering & Network Specialist, recipient of the OPES Full Scholarship with a GPA of 3.94. I build accessible, pixel-perfect digital experiences.
                </p>
                <div className="fade-in" style={{ marginTop: '50px', animationDelay: '0.5s' }}>
                    <a href="#about" className="btn">Check out my work!</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
