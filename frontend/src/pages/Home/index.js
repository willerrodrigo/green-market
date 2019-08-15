import React from 'react';
import './styles.css';

import logo from '../../assets/logo.svg';

export default function Home() {
    return (
        <div className="logo-container">
            <img src={logo} alt="Green Market" />
        </div>
    );
}