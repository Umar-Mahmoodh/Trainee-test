import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import './App.css';
import Login from './login';
import './App.css';
import Home from "./home";

class App extends React.Component{

  
  
  render(){
  return (
        <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>

    </div>
  );
  }
}

export default App;
