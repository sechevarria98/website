import JSONDATA from '../../data/db.json';
import '../../App.css';

const Projects = () => {
    return (
        <div className="page">

            <section className="projectlist">
                {JSONDATA.map((repositories, index) => (
                    <article key={index} className="projects">
                        <header>
                        <h2><a href={repositories.link} target="_blank" rel="noreferrer">{repositories.reponame}</a></h2>
                            <h3>{repositories.title}</h3>
                        </header>
                        <article>
                            <p> {repositories.description} </p>
                            
                            {repositories.technincal.map((skill, index)=> (
                                <em key={index}>{skill}</em>
                            ))}
                        </article>
                    </article>
                ))}
            </section>

        </div>
    );  
}

export default Projects;