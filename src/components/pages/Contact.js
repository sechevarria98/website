import {FaLinkedin as LinkedIn, FaGithub as Github,
FaEnvelope as Email, FaPhone as Phone} from 'react-icons/fa';

import '../../App.css';

const Contact = () => {

    const contacts = {
        'email': { link: "samechevarria2@gmail.com", svg: <Email/> },
        'phone': { link: "7739541626", svg: <Phone/> },
        'github': { link: "https://github.com/sechevarria98", svg: <Github/>},
        'linkedin': { link: " https://www.linkedin.com/in/samuel-echevarria-793a80199/", svg: <LinkedIn/> }
    }

    return (
        <div className="page">
            <h2>CONTACT</h2>

            <section className = "cardlist">
                {Object.entries(contacts).map(( [contact, {link, svg}]) => (
                    <article className = "card" key = { contact }>
                        <header className = "cardheader">
                            <h2> { svg } { contact }</h2>
                            {contact === 'phone' ? <a href= { "tel:+1" + link }>{ link }</a> : 
                                <a target="_blank" 
                                    rel="noreferrer" 
                                    href = { contact === 'email' ? "mailto:" + link : link } > 
                                { link } </a>
                            }
                        </header>
                    </article> 
                ))}

            </section>

        </div>

    );  
}

export default Contact;