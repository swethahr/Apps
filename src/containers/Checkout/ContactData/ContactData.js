import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  './ContactData.css';
import SelectedIngredient from '../../../components/SelectedIngredients/SelectedIngredient/SelectedIngredient';

class ContactData extends Component {

    state = { show: false };

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
      this.props.history.push('/');
    };

    orderHandler = ( event ) => {
        event.preventDefault();
        this.showModal();
    }
    render() {   
          
        let form = (
            <form onSubmit={this.orderHandler}>
                <input
                    type="text"
                    name="txtFname"
                    id="txtFname"
                    placeholder="First Name"
                    required
                />
                <br />
                <input
                    type="email"
                    name="txtEmail"
                    placeholder="Email"
                    required
                />
                <br />
                <textarea
                    type="text"
                    name="txtAdditionalNotes"
                    placeholder="Additional Notes"                    
                />
                <br />               
                <button btnType="Success">ORDER</button>
            </form>
        ); 
        
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
            <div>
                <h4>Enter your Contact Data</h4>
                {form}
                <div className="Modal" show={this.state.show} handleClose={this.hideModal} 
                 style={{
                    transform: this.state.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.state.show ? '1' : '0'
                }}>
                  <label style={{color:'black'}}>Order Details: </label>
                    {selectedIngredients}
                    <label style={{color:'red'}}>Total Price : {totalPrice}</label>
                    <br/>
                    <h4 style={{color:'green'}}>Thank you for ordering salad. Delivery is on its way...</h4>
                    <button type="button" onClick={this.hideModal}>
                        close
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
         selectedIngs: state.saladBuilder.selectedIngredients,
    };
}

export default connect(mapStateToProps)(withRouter(ContactData));