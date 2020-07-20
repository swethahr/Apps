import React from 'react';

import saladLogo from '../../assets/images/salad.png';
import './Logo.css'

const logo = (props) => (
    <div className="Logo">
        <img src={saladLogo} alt="My Salad" className="headerlogo"/>
            Welcome to Nutritious and Delicious Salad Shop
    </div>
);

export default logo;

