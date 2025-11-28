import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaBars, FaTimes, FaHome, FaMapMarkerAlt, FaInfoCircle, FaCalendarAlt, FaUserLock } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <HashLink smooth to="/#utama" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    Homestay<span className="logo-accent">Nature</span>
                </HashLink>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <HashLink smooth to="/#utama" className="nav-links" onClick={toggleMenu}>
                            <FaHome className="nav-icon" /> Utama
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="/#info" className="nav-links" onClick={toggleMenu}>
                            <FaInfoCircle className="nav-icon" /> Info
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="/#lokasi" className="nav-links" onClick={toggleMenu}>
                            <FaMapMarkerAlt className="nav-icon" /> Lokasi
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="/#kekosongan" className="nav-links" onClick={toggleMenu}>
                            <FaCalendarAlt className="nav-icon" /> Kekosongan
                        </HashLink>
                    </li>
                    {/* Admin Login Link - Only visible in mobile menu or if you want it always there */}
                    <li className="nav-item">
                        <Link to="/admin" className="nav-links" onClick={toggleMenu}>
                            <FaUserLock className="nav-icon" /> Admin
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
