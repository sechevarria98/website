import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Home from '../img/home.svg';
import Resume from '../img/filepdf.svg';
import Contact from '../img/fire.svg';
import Menu from '../img/bars.svg';

function Navigation() {
    const paths = {
        '/': { name: "Home", image: Home},
        '/resume': { name: "Resume", image: Resume},
        '/projects': { name: "Projects", image: Contact}
    }

    return (
        <nav className="navigation">
            <ul className="navbar">
                <li classNameName="navitem">
                    <div className="navlink">
                        <img src={ Menu } alt = "menu"/>
                    </div>
                </li>

                {Object.entries(paths).map(( [path, {name, image}]) => (     
                    <NavLink className="links" to = {path}>
                        <li className="navitem">
                            <div className="navlink">
                                <img src = { image } alt = { name }/>
                                <h1 className="navtext"> {name} </h1>
                            </div>
                        </li>
                    </NavLink>      
                ))}

            </ul>
        </nav>
    );
}

export default Navigation;