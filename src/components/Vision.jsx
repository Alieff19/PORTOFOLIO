import React from 'react';

const Vision = () => {
    return (
        <section id="vision" className="section container" style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '40px' }}>
                <span style={{ color: 'var(--accent)', marginRight: '10px', fontSize: '1.5rem', fontFamily: 'monospace' }}>02.</span>
                Vision & Goals
            </h2>

            <div className="glass-panel" style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '50px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative element */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '-50px',
                    width: '150px',
                    height: '150px',
                    background: 'var(--accent)',
                    filter: 'blur(80px)',
                    opacity: 0.2
                }}></div>

                <p style={{
                    fontSize: '1.8rem',
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                    color: 'var(--text-primary)',
                    marginBottom: '20px'
                }}>
                    "To become an IT expert capable of bridging business needs with secure, efficient digital infrastructure that has a broad impact on society through software engineering and network security."
                </p>
            </div>
        </section>
    );
};

export default Vision;
