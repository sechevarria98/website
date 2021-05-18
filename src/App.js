import React, { useState } from 'react';
import Navigation from './components/Navigation';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import { lightTheme, darkTheme, GlobalStyles } from './components/utils/Themes';

const paths = {
  "/": {Comp: Home, exact: true},  
  "/projects": {Comp: Projects, exact:false},
  "/resume": {Comp: Resume, exact:false},
  "/contact": {Comp: Contact, exact:false}
}

const StyledApp = styled.div`
.navigation {
  background-color: ${props => props.theme.navbarBG};
  color: ${props => props.theme.fontColor};
}

.menu {
  background-color: ${props => props.theme.navbarBGsec};
}

.navigation .links {
  color: ${props => props.theme.fontColor};
}

.card {
  background: ${props => props.theme.cardBG};
  color: ${props => props.theme.fontColor};
}

.cardheader a {
  color: ${props => props.theme.fontColor};
}
`;

function App() {

  const [currentTheme, setTheme] = useState("Light");

  const themeToggle = () => {
    currentTheme === "Light" ? setTheme("Dark") : setTheme("Light");
  }

  return (
    <ThemeProvider theme = { currentTheme === "Light" ? lightTheme : darkTheme }>
      <GlobalStyles/>
      <StyledApp>
        <div className="app">
          <Router>
            <Navigation
              themeToggle = {themeToggle} 
              currentTheme = {currentTheme}
            />
            <Switch>
              {Object.entries(paths).map(( [path, {Comp, exact}]) => (
                <Route
                  key = {path}
                  exact = { exact } 
                  path = { path } 
                  component = { Comp }
                />
              ))}
            </Switch>
          </Router>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
