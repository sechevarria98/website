import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navbar">
                <Link className="links" to = "/">
                    <li className="navitem">
                        <div className="navlink">
                            <h2 className="navtext">Home</h2>
                        </div>
                    </li>
                </Link>

                <Link className="links" to = "/projects">
                    <li className="navitem">
                        <div className="navlink">
                            <h2 className="navtext">Projects</h2>
                        </div>
                    </li>
                </Link>

                <Link className="links" to = "/resume">
                    <li className="navitem">
                        <div className="navlink">
                            <h2 className="navtext">Resume</h2>
                        </div>
                    </li>
                </Link>
            </ul>

        </nav>
    );
}

export default Navigation;