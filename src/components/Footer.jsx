import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--md-sys-color-surface-variant)',
            color: 'var(--md-sys-color-on-surface-variant)',
            padding: '24px',
            marginTop: 'auto',
            textAlign: 'center'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
                <a href="tel:+1234567890" style={{ color: 'inherit' }}><FaPhone size={24} /></a>
                <a href="mailto:host@homestay.com" style={{ color: 'inherit' }}><FaEnvelope size={24} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><FaInstagram size={24} /></a>
            </div>
            <p className="text-body-medium">© 2024 Homestay Nature. Hak Cipta Terpelihara.</p>
        </footer>
    );
};

export default Footer;
