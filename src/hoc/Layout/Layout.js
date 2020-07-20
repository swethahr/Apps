import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    
    render () {
        return (
            <React.Fragment>
                <Toolbar/>                
                <main className="Content">
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default connect( null )( Layout );