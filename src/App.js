import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './UI/Home/home'

function App() {
  return (
    <div className="App">

        <Router>
          <Switch>
            <Route path ="/" exact component={Home}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
