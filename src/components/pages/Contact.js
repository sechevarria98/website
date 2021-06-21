import {FaLinkedin as LinkedIn, FaGithub as Github,
FaEnvelope as Email, FaPhone as Phone} from 'react-icons/fa';

import '../../App.css';

const Contact = () => {

    const contacts = {
        'Email': { link: "samechevarria2@gmail.com", svg: <Email size={70}/> },
        'Phone': { link: "7739541626", svg: <Phone size={70}/> },
        'Github': { link: "https://github.com/sechevarria98", svg: <Github size={70}/>},
        'Linkedin': { link: " https://www.linkedin.com/in/samuel-echevarria-793a80199/", svg: <LinkedIn size={70}/> }
    }

    return (
        <div className="page">
            <section className = "cardlist">
                {Object.entries(contacts).map(( [contact, {link, svg}], index) => (
                    <a target="_blank" rel="noreferrer" href = { contact === 'Email' ? "mailto:" + link : (
                        contact === 'Phone' ? "tel:+1" + link : link)}>
                        <article className = "card" key = { index }>
                            <header className = "cardheader">
                                { svg } <h2 className="cardtype"> { contact }</h2>
                            </header>
                        </article>
                    </a> 
                ))}

            </section>

        </div>

    );  
}

export default Contact;