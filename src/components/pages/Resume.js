import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div className="page">
                <div className="resumepage">
                    <div className="fileheader">
                        <h1> Samuel Echevarria </h1>
                        <ul className="contact">
                            <li> Chicago, Il 60632 (773)954-1626 </li>
                            <li> <a href="mailto:samechevarria2@gmail.com">samechevarria2@gmail.com</a> </li>
                            <li> <a href="https://github.com/sechevarria98">https://github.com/sechevarria98</a> </li>
                            <li> <a href="https://www.linkedin.com/in/samuel-echevarria-793a80199">https://www.linkedin.com/in/samuel-echevarria-793a80199</a> </li>
                        </ul>
                    </div>
                    
                    <div class="experience">
                        <h2>Internship Experience</h2>
                        <h3>e-Stewards Global Impact Calculator <span class="dates">March 2020 | July 2020</span></h3>
                        <ul>
                            <li class="list-item">Built web appliction using React Framework</li>
                            <li class="list-item">Met with representatives 2-3 weeks</li>
                        </ul>
                    </div>

                    <div class="education">
                        <h2>Education</h2>
                        <h3>Illinois Institute of Technology - Chicago, IL <strong class="dates">August 2017 | May 2021</strong></h3>
                        <h3>Bachelors of Science in computer Science | Major GPA: 3.1</h3>
            
                        <ul>
                            <li class="list-item">Object Oriented Programming in Java</li>
                            <li class="list-item">Systems Programming in C</li>
                            <li class="list-item">Computer Organization & Assembly Programming in C</li>
                            <li class="list-item">Database Organization in Java and SQL</li>
                            <li class="list-item">Discrete Structures</li>
                            <li class="list-item">Data Structures & Algorithms in Python</li>
                        </ul>
                    </div>

                    <div class="projects">
                        <h2>Projects</h2>
                        <h3>Online Grocery Store</h3>
                        <ul>
                            <li class="list-item">Constructed a simulation of an application for an online grocery store.</li>
                            <li class="list-item">Designed a GUI (Graphical User Interface) in Java for user interactions.</li>
                            <li class="list-item">Program interacts with a database that hosts information about the grocery store</li>
                        </ul>
            
                        <h3>Minimal Dissasembler</h3>
                        <ul>
                            <li class="list-item">Built a program in C that reads binary input values from a text file</li>
                            <li class="list-item">Translated the input into the equivalent assembler program</li>
                        </ul>
            
                        <h3>Traffic Simulator</h3>
                        <ul>
                            <li class="list-item">Developed a simulation for traffic written in Java</li>
                            <li class="list-item">Representing the traffic that occurs on a four-way intersection</li>
                        </ul>
                    </div>

                    <div class="skills">
                        <h2>Technical Skills</h2>
                        <p>Programming Languages: Java, Python, C, HTML, CSS3, JavaScript, SQL</p>
                    </div>
            
                    <div class="alt-experience">
                        <h2>Volunteer Experience</h2>
                        <h3>Chicago Public Library - Chicago, IL <strong class="dates">August 2017 | May 2018</strong></h3>
                        <ul>
                            <li class="list-item">Assisted people at the library with what they needed assistance on.</li>
                            <li class="list-item">Setup various live streaming sessions on Twitch for the library.</li>
                            <li class="list-item">Managed 12+ people for the live streaming sessions.</li>
                        </ul>
            
                        <h3>Working Bikes - Chicago, IL <strong class="dates">November 2017 | November 2017</strong></h3>
                        <ul>
                            <li class="list-item">Moved broken bikes from storage to work area.</li>
                            <li class="list-item">Repaired about 30+ broken bikes, e.g., replaced chains, fixed handlebars, etc.</li>
                            <li class="list-item">Coordinated with other volunteers to efficiently move repaired bikes.</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Resume;