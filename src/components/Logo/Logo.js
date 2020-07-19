import React from 'react';

import saladLogo from '../../assets/images/salad.png';
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={saladLogo} alt="My Salad"/>
    </div>
);

export default logo;

