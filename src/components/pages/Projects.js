import React from 'react';
import '../../App.css';

import Login from '../../img/LoginParking.png';
import Reserve from '../../img/ParkingReserve.png'

const Projects = () => {
    return (

        <div className="page">
            <h2>PROJECTS</h2>

            <h2>e-Stewards Global Impact Calculator</h2>
            <iframe title="project" src="https://dserapio.github.io/websitecalc/input"/>
            <p className="projecttext">
            The e-stewards Global Impact Calculator started as a project for my Inter-Professional 
            Project (IPRO) course. The amount of work to deliver a quality web app carried over 
            into the summer of 2020. over the summer, the work consisted of researching the yield 
            amount of various e-waste and building a calculator for people to determine the yields 
            of their e-waste. During this process, the team and I met with representatives from e-Stewards. 
            In these biweekly meetings, we discussed various aspects of the calculator and research.
            You can find the project <a target="_blank" rel="noreferrer" href="https://dserapio.github.io/websitecalc/input">here</a>.
            </p>

            <h2>Software Engineering Project</h2>
            <img src={Login} alt="login page"/>
            <img src={Reserve} alt="reserve page"/>
            <p className="projecttext">
            In my software engineering course, the project was to make a smart parking application. 
            For this project, I used Java and PostgreSQL to take care of the backend. The database held 
            data such as user accounts, parking lots, card information, etc. Then I used Java Swing to 
            create a user interface. You can find more details <a target="_blank" rel="noreferrer" href="https://github.com/sechevarria98/SmartParking">here</a>.
            </p>

            <p className="projecttext">
            You can find my other projects on <a target="_blank" rel="noreferrer" href="https://github.com/sechevarria98">Github</a>
            </p>

        </div>
    );  
}

export default Projects;