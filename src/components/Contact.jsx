import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ textAlign: 'center', marginBottom: '100px' }}>
            <p style={{ color: 'var(--accent)', fontFamily: 'monospace', fontSize: '1.2rem', marginBottom: '20px' }}>07. What's Next?</p>
            <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Get In Touch</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 50px', fontSize: '1.2rem' }}>
                "I am ready to collaborate for future innovation." <br />
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <a href="mailto:aliefalfaridzi12@gmail.com" className="btn" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>
                Say Hello
            </a>

            <div style={{ marginTop: '100px', borderTop: '1px solid rgba(136, 146, 176, 0.2)', paddingTop: '50px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
                    <a href="https://instagram.com/alieffalfaridzi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>Instagram</a>
                    <a href="https://linkedin.com/in/aliefalfaridzi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Designed & Built by M. Alief Alfaridzi <br />
                    Location: Surabaya, Indonesia
                </p>
            </div>
        </section>
    );
};

export default Contact;
