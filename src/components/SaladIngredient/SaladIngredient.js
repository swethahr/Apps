import React, { Component } from 'react';
import './SaladIngredient.css';

const saladIngredient = (props) => {
    return (
        <React.Fragment>
            <div className="SaladIngredient">
                <label  className="Label"><b>Name:</b> {props.name}</label>      
                <label className="Label"><b>Price: </b>{props.price }</label>      
                <button
                    className="Add"
                    onClick={props.added}>Add</button>   
                <button
                    className="Remove"
                    onClick={props.removed}>Remove</button>                
            </div>
        </React.Fragment>
    );
}

export default saladIngredient;