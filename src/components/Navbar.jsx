import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Vision', href: '#vision' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease-in-out',
            backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
            padding: scrolled ? '10px 0' : '20px 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    MAA
                </div>
                <ul style={{ display: 'flex', gap: '30px' }}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-primary)',
                                fontWeight: 500
                            }}>
                                <span style={{ color: 'var(--accent)', marginRight: '5px' }}>0{index + 1}.</span>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
