import React, { Component } from 'react';
import {BrowserRouter as Router ,Switch} from 'react-router-dom'

import Header from '../header/header.js'
import ERegister from  '../Register/Register'
import Login from '../Login/Login.js'
import PageNotFound from '../PageNotFound/pagenotfound'
import View from '../View/view'
import CRoute from '../custom-route/custom-route'
class App extends Component {
  render() {
    return (
      < Router>
      <div>
       <Header></Header>
       <Switch>
      <CRoute exact  path='/login' component={Login}></CRoute>
      <CRoute exact   path='/register' component={ERegister}></CRoute>
      <CRoute exact  cprivate path='/view' component={View}></CRoute>
      <CRoute exact component={PageNotFound}></CRoute>
      </Switch>
      </div>
      </Router>
      
    );
  }
}

export default App;
