import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navigation() {
    const paths = {
        '/': { name: "Home"},
        '/resume': { name: "Resume"},
        '/projects': { name: "Projects"}
    }


    return (
        <nav className="navigation">
            <ul className="navbar">
                {Object.entries(paths).map(( [path, {name}]) => (     
                    <NavLink className="links" to = {path}>
                        <li className="navitem">
                            <div className="navlink"> 
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