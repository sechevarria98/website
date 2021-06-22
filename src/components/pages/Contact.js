import {FaLinkedin as LinkedIn, FaGithub as Github,
FaEnvelope as Email, FaPhone as Phone} from 'react-icons/fa';

import '../../App.css';

const Contact = () => {

    const contacts = {
        'email': { link: "samechevarria2@gmail.com", svg: <Email size={70}/> },
        'phone': { link: "7739541626", svg: <Phone size={70}/> },
        'github': { link: "https://github.com/sechevarria98", svg: <Github size={70}/>},
        'linkedin': { link: " https://www.linkedin.com/in/samuel-echevarria-793a80199/", svg: <LinkedIn size={70}/> }
    }

    function capatilizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="page">
            <section className = "cardlist">
                {Object.entries(contacts).map(( [contact, {link, svg}], index) => (
                    <article className = "card" key = { index }>
                        <a target="_blank" rel="noreferrer" href = { contact === 'email' ? "mailto:" + link : (
                        contact === 'phone' ? "tel:+1" + link : link)}>
                            <header className = "cardheader">
                                { svg } <h2 className="cardtype"> { capatilizeFirstLetter(contact) } </h2>
                            </header>
                        </a>
                    </article>
                ))}

            </section>

        </div>

    );  
}

export default Contact;