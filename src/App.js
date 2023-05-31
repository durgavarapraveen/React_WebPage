import React from 'react';
import  ReactDOM  from 'react-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/pages/Home';
import Herosection from './components/Herosection';
import Button from './components/Button';
import { BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes, Switch} from 'react-router';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/Signup';

function App() {

  return (
    <>
      <Router>
        <Switch >
          {/* <Route path='/' exact component={Navbar} /> */}
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/Signup' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
