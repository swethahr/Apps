import React, { Component } from 'react';
import './SelectedIngredient.css';

const selectedIngredient = (props) => {
    return (
        <React.Fragment>
            <div className="SaladIngredient">
                <label  className="Label"><b>Name:</b> {props.name}</label>      
                <label className="Label"><b>Price: </b>{props.price }</label>      
                <label className="Label" ><b>Qty: </b>{props.qty }</label>
                <label className="Label" ><b>Total: </b>{props.total }</label>
            </div>
        </React.Fragment>
    );
}

export default selectedIngredient;