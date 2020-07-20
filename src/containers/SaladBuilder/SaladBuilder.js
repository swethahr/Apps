import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import SaladIngredient from '../../components/SaladIngredient/SaladIngredient';
import SelectedIngredient from '../../components/SelectedIngredients/SelectedIngredient/SelectedIngredient';
import './SaladBuilder.css';


class SaladBuilder extends Component {     
    
    componentDidMount () {
        this.props.onInitIngredients();
    }

    checkoutHandler=()=>{
        this.props.history.push('/checkout');
    }

    render () {
        let saladIngredients = null;
        if ( this.props.ings ) {
            saladIngredients=this.props.ings.map((ing,index)=>{
               return <SaladIngredient 
                   name={ing.name}
                   price={ing.price}
                   key={index}
                   removed={() => this.props.onIngredientRemoved(ing.name)}
                   added={()=>this.props.onIngredientAdded(ing.name)}/>
            })
        }

        let selectedIngredients = null;
        let selectedIngredientMsg = null;
        let checkoutButton=null
        if ( this.props.selectedIngs ) {
            selectedIngredients=this.props.selectedIngs.map((ing,index)=>{
                if(ing.qty>0){
                    selectedIngredientMsg = <label style={{color:'red'}}>Selected Ingredients: </label>;
                    checkoutButton= <button className="Checkout" onClick={this.checkoutHandler}>Checkout</button> 
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
               <div>
               <label>Please Add/Remove the ingredients: </label>
                {saladIngredients} 
                </div>          
                <div>
                {selectedIngredientMsg}
                {selectedIngredients}
                {checkoutButton}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
         ings: state.saladBuilder.ingredients,
         selectedIngs: state.saladBuilder.selectedIngredients,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.getIngredients()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SaladBuilder);