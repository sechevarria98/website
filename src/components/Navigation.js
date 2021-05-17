import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Home from '../img/home.svg';
import Resume from '../img/filepdf.svg';
import Contact from '../img/fire.svg';
import Project from '../img/database.svg';
import Menu from '../img/bars.svg';
import Light from '../img/lightbulb-solid.svg';
import Dark from '../img/lightbulb-regular.svg';

function Navigation(props)  {
    const paths = {
        '/': { name: "Home", image: Home},
        '/resume': { name: "Resume", image: Resume},
        '/projects': { name: "Projects", image: Project},
        '/contact': {name: "Contact", image: Contact}
    }
    
    return (
        <nav className="navigation">
            <ul className="navbar">
                <li className="navitem">
                    <div className="menu">
                        <img src={ Menu } alt="menu logo" />
                    </div>
                </li>

                {Object.entries(paths).map(( [path, {name, image}]) => (     
                    <NavLink className="links" key = {path} to = {path}>
                        <li className="navitem">
                            <div className = "navlink">
                                <img src = { image } alt = { name + "logo"}/>
                                <span className="navtext"> {name} </span>
                            </div>
                        </li>
                    </NavLink>      
                ))}

                <li className="navitem">
                    <div className="navlink" onClick = {() => props.themeToggle()}>
                        <img src={ props.currentTheme === 'Light' ? Light : Dark } alt = "theme logo" />
                        <span className="navtext">{ props.currentTheme === 'Light' ? "Light Mode" : "Dark Mode"}</span>
                    </div>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;