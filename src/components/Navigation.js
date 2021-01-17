import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navbar">
                <NavLink className="links" to = "/">
                    <li className="navitem">
                        <div className="navlink">
                            <h2 className="navtext">Home</h2>
                        </div>
                    </li>
                </NavLink>

                <NavLink className="links" to = "/projects">
                    <li className="navitem">
                        <div className="navlink">
                            <h2 className="navtext">Projects</h2>
                        </div>
                    </li>
                </NavLink>

                <NavLink className="links" to = "/resume">
                    <li className="navitem">
                        <div className="navlink">
                            <h2 className="navtext">Resume</h2>
                        </div>
                    </li>
                </NavLink>
            </ul>

        </nav>
    );
}

export default Navigation;