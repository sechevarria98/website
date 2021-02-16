import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

const paths = {
  "/": {Comp: Home, exact: true},  
  "/projects": {Comp: Projects, exact:false},
  "/resume": {Comp: Resume, exact:false}
}

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          {Object.entries(paths).map(( [path, {Comp, exact}]) => (
            <Route exact= { exact } path = { path } component = { Comp }/>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
