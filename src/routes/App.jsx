import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Checkout from '../containers/Checkout';
import Context from '../context/Context';
import Home from '../containers/Home';
import Information from '../containers/Information';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <Context.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/checkout/information' component={Information} />
            <Route exact path='/checkout/payment' component={Payment} />
            <Route exact path='/checkout/success' component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;