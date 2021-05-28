import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import '../App.css';

import { FaHome as Home, FaFilePdf as Resume,
FaFire as Contact, FaDatabase as Project, FaBars as Menu,
FaRegLightbulb as Dark, FaLightbulb as Light } from 'react-icons/fa';

const Navigation = ( props )  => {
    const paths = {
        '/': { name: "Home", svg: <Home size = {70}/>},
        '/resume': { name: "Resume", svg: <Resume size = {70}/>},
        '/projects': { name: "Projects", svg: <Project size = {70}/>},
        '/contact': {name: "Contact", svg: <Contact size = {70}/>}
    }
    
    return (
        <nav className="navigation">
            <ul className="navbar">
                <li className="navitem">
                    <div className="menu">
                        <Menu size={40}/>
                    </div>
                </li>

                {Object.entries(paths).map(( [path, {name, svg}], index) => (     
                    <NavLink className="links" key = { index } to = { path }>
                        <li className="navitem">
                            <div className = "navlink">
                                { svg }
                                <span className="navtext"> { name } </span>
                            </div>
                        </li>
                    </NavLink>      
                ))}

                <li className="navitem">
                    <div className="navlink" onClick = { () => props.themeToggle() }>
                        { props.currentTheme === 'Light' ? <Light size = {70}/> : <Dark size = {70}/> }
                        <span className="navtext">{ props.currentTheme === 'Light' ? "Light Mode" : "Dark Mode"}</span>
                    </div>
                </li>

            </ul>
        </nav>
    );
}

Navigation.prototype = {
    currentTheme: PropTypes.string,
    themeToggle: PropTypes.func
}

export default Navigation;