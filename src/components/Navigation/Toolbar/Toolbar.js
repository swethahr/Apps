import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';


const toolbar = ( props ) => (
    <header className="Toolbar">
        <div className="Logo">
            <Logo />
        </div>
        <div>
        <NavigationItem link="/ordersalad" exact>Order Salad</NavigationItem>
        </div>
    </header>
);

export default toolbar;