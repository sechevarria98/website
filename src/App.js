import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path = "/" component = { Home } />
          <Route exact path = "/projects" component = { Projects } />
          <Route exact path = "/resume" component = { Resume } />
          <Route component = { Error } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
