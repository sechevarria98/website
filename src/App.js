import { useState } from 'react';
import Navigation from './components/Navigation';
import styled, { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Page from './components/Page';
import { lightTheme, darkTheme, GlobalStyles } from './components/utils/Themes';

const paths = {
  "/": {Comp: Home, exact: true, name: "Home"},  
  "/projects": {Comp: Projects, exact:false, name: "Projects"},
  "/resume": {Comp: Resume, exact:false, name: "Resume"},
  "/contact": {Comp: Contact, exact:false, name: "Contact"}
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

.homepage {
  background: ${props => props.theme.cardBG};
}
`;

export default function App() {

  const [currentTheme, setTheme] = useState("Light");

  const themeToggle = () => {
    currentTheme === "Light" ? setTheme("Dark") : setTheme("Light");
  }

  return (
    <ThemeProvider theme = { currentTheme === "Light" ? lightTheme : darkTheme }>
      <GlobalStyles/>
      <StyledApp>
        <div className="app">
          <Router basename={process.env.PUBLIC_URL}>
            <Navigation
              themeToggle = {themeToggle} 
              currentTheme = {currentTheme}
            />
            <Switch>
              {Object.entries(paths).map(( [path, {Comp, exact, name}], index) => (
                <Route
                  key = {index}
                  exact = { exact } 
                  path = { path } 
                  render = {(props) => (
                    <Page title = {name}>
                      <Comp {...props}/>
                    </Page>
                  )}
                />
              ))}
            </Switch>
          </Router>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
};