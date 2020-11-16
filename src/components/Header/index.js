import React from 'react';
import logo from '../../assets/html-coding.png'
import profile from '../../assets/3.jpg'

import './styles.css';
const Header = () => (
    <header  id = "main-header">
        <nav>
            <img id="logo" src={logo} alt="logo" />
            <h2>CODE2GT</h2>
            <div>
                <span>Meu Perfil</span>
                <img id="profile" src={profile} alt="profile-icon" />
            </div>
        </nav>
    </header>
);

export default Header;  