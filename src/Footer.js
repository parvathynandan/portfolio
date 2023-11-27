import { Fragment, useEffect } from "react"
import { titleRevealAnimation } from "./animations";
import { faLinkedin, faInstagram, faSkype  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    useEffect(() => {
        titleRevealAnimation() 
    }, [])
    return (
        <Fragment>
            <div class='footer-container'>
                <div class='revealUp contact-title'>Reach out and say Hi!</div>
                <div class='contact-list-1'>
                    <p class='email'>nandakumarparvathy97@gmail.com</p>
                    <p class='phone'>+1-438-979-9203</p>
                </div>
                <div class='contact-list-2'>
                    <div class='social-media'>
                        <a class='test' href="https://www.google.ca/" target="_blank"><FontAwesomeIcon class='social-media-icon' icon={faLinkedin} /></a>
                    </div>
                    <div  class='social-media'>
                        <FontAwesomeIcon class='social-media-icon' icon={faInstagram} />
                    </div>
                    <div class='social-media' >
                        <FontAwesomeIcon class='social-media-icon' icon={faSkype} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer