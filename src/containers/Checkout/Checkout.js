import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedIngredient from '../../components/SelectedIngredients/SelectedIngredient/SelectedIngredient';
import ContactData from '../Checkout/ContactData/ContactData';
import './Checkout.css';


class Checkout extends Component {  
    
    render () {        
        let selectedIngredients = null;  
        let totalPrice=0;    
        if ( this.props.selectedIngs ) {
            selectedIngredients=this.props.selectedIngs.map((ing,index)=>{  
                if(ing.qty>0){       
                    totalPrice+=ing.total;      
               return <SelectedIngredient 
                   name={ing.name}
                   price={ing.price}
                   total={ing.total}
                   key={index} 
                   qty={ing.qty}/>                
                }
            })
        }
       
        return (
            <React.Fragment>                          
                <label style={{color:'black'}}>Order Details: </label>
                {selectedIngredients}
                <label style={{color:'red'}}>Total Price : {totalPrice}</label>
                <br/>
                <ContactData/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {         
         selectedIngs: state.saladBuilder.selectedIngredients,
    };
}

export default connect(mapStateToProps, null)(Checkout);