import '../../App.css';

import LinkedIn from '../../img/linkedin.svg';
import Github from '../../img/github.svg';
import Email from '../../img/envelope-square-solid.svg';
import Phone from '../../img/phone-solid.svg';

const Contact = () => {

    const contacts = {
        'email': { link: "samechevarria2@gmail.com", image: Email },
        'phone': { link: "7739541626", image: Phone },
        'github': { link: "https://github.com/sechevarria98", image: Github},
        'linkedin': { link: " https://www.linkedin.com/in/samuel-echevarria-793a80199/", image: LinkedIn }
    }

    return (
        <div className="page">
            <h2>CONTACT</h2>

            <section className = "cardlist">
                {Object.entries(contacts).map(( [contact, {link, image}]) => (
                    <article className = "card" key = { contact }>
                        <header className = "cardheader">
                            <h2> <img src = {image} alt = {contact + "logo"} />{ contact }</h2>
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