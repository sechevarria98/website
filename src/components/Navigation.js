import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Home from '../img/home.svg';
import Resume from '../img/filepdf.svg';
import Contact from '../img/fire.svg';
import Menu from '../img/bars.svg';
import Light from '../img/lightbulb-solid.svg';
import Dark from '../img/lightbulb-regular.svg';

function Navigation(props)  {
    const paths = {
        '': { name: "", image: Menu},
        '/': { name: "Home", image: Home},
        '/resume': { name: "Resume", image: Resume},
        '/projects': { name: "Projects", image: Contact}
    }
    
    return (
        <nav className="navigation">
            <ul className="navbar">
                {Object.entries(paths).map(( [path, {name, image}]) => (     
                    <NavLink className="links" to = {path}>
                        <li className="navitem">
                            <div className = { path === '' ? "menu" : "navlink" }>
                                <img src = { image } alt = { name }/>
                                <span className="navtext"> {name} </span>
                            </div>
                        </li>
                    </NavLink>      
                ))}
                <li className="navitem">
                    <div className="navlink" onClick = {() => props.themeToggle()}>
                        <img src={ props.currentTheme === 'Light' ? Light : Dark } alt = "theme logo" />
                        <span className="navtext">Theme</span>
                    </div>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;