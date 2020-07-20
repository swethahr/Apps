import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layout/Layout';

const asyncOrders = asyncComponent(() => {
  return import('./containers/SaladBuilder/SaladBuilder');
});

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

class App extends Component {
   render () {
    let routes = (
        <Switch>
          <Route path="/ordersalad" component={asyncOrders} />
          <Route path="/checkout" component={asyncCheckout} />
          <Redirect to="/" />
        </Switch>
      ); 

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}


export default withRouter(App);
