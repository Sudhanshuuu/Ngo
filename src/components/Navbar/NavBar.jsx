
import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.jpg";

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
            <div className='nav-btn'>
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            <div className="menu-items">
                <div>
                    <img src={logo} alt="logo" />
                    <div>
                        <span className="M">N</span>
                        <span className="a">a</span>
                        <span className="a1">y</span>
                        <span className="r">e</span>
                        <span className="g">P</span>
                        <span className="d">a</span>
                        <span className="h">n</span>
                        <span className="a2">k</span>
                        <span className="r1">h</span>

                    </div>
                </div>
                <div>
                    <Link>HOME</Link>
                    <Link >COLLEGES</Link>
                    <Link>COURSES</Link>
                    <Link>EXAMS</Link>
                    <Link>SCHOLARSHIP</Link>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
