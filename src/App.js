import React from 'react';
import './App.css';


import { Area } from "./Area";
import { Triangle } from "./Triangle";
import { Hypotense } from "./Hypotense";
import Quiz from "./Quiz";
import Navbar from "./Navbar";


import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    
  <div className="App">
  
    <Switch>
      <Route path="/Area" exact={true} component={Area}/>
      <Route path="/Hypotense" exact={true} component={Hypotense}/>
      <Route path="/Triangle" exact={true} component={Triangle}/>
      <Route path="/" exact={true} component={Quiz}/>
      </Switch>
       
      </div>
    </Router>
    
  );
}

export default App;

