import { Fragment, useEffect } from "react"
import { titleRevealAnimation } from "./animations";
import { faLinkedin, faInstagram, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    useEffect(() => {
        titleRevealAnimation() 
    }, [])
    return (
        <Fragment>
            <div id='contact' class='footer-container'>
                <div class=' contact-title'>Reach out and say Hi!</div>
                <div class='container'>
                    <div class='row justify-content-center'>
                    <a href="mailto:nandakumarparvathy97@gmail.com" class='col-md-3 email'>nandakumarparvathy97@gmail.com</a>
                    <a href="tel:+1234567890" class='col-md-3 phone'>+1-438-979-9203</a>
                    </div>
                </div>
                <div class='contact-list-2'>
                    <div class='social-media'>
                        <a href="https://www.linkedin.com/in/parvathy-nandakumar-747847231/" target="_blank">
                            <FontAwesomeIcon class='social-media-icon' icon={faLinkedin} />
                        </a>
                    </div>
                    <div  class='social-media'>
                        <a href="https://www.instagram.com/parvathy_nandan_/" target="_blank">
                            <FontAwesomeIcon class='social-media-icon' icon={faInstagram} />
                        </a>
                    </div>
                    <div class='social-media' >
                        <a href="https://github.com/parvathynandan" target="_blank">
                            <FontAwesomeIcon class='social-media-icon' icon={faGithub} />
                        </a>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer