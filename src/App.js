import React from 'react';
import './App.css';

import Boot from './components/Boot'
import Home from './components/Home'
import { Area } from "./Area";
import { Triangle } from "./Triangle";
import { Hypotense } from "./Hypotense";
import Quiz from "./Quiz";
import Navbar from "./Navbar";

import Inputs from './components/Inputs'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    
  <div className="App">
  
    <Switch>
      
      {/* <Route path="/" exact={true} component={Home}/>
      <Route path="/Details" exact={true} component={Inputs}/>
      <Route path="/Standards" exact={true} component={Boot}/> */}

      
      <Route path="/Area" exact={true} component={Area}/>
      <Route path="/Hypotense" exact={true} component={Hypotense}/>
      <Route path="/Triangle" exact={true} component={Triangle}/>
      <Route path="/" exact={true} component={Quiz}/>
      
      
      {/* <Boot/> */}
      </Switch>
       
      </div>
    </Router>
    
  );
}

export default App;

