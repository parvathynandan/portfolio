import './styles.css'
import { useEffect } from "react"
import { faAngular, faReact, faNode, faGit, faJs, faHtml5, faCss3, faAws, faBootstrap  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { titleRevealAnimation } from "./animations";


const Technology = () => {
    useEffect(() => {
        titleRevealAnimation() 
    }, [])
return(
    <div class='techContainer'>
        <div class='container-fluid'>
            <div class='row align-items-center justify-content-center'>
                <div class="revealUp col-sm-4  technology-title">
                    My Tech Stack
                </div>
                <div class="col-sm-8 technology-list">
                <div class='tech-list'>
                    <div class='tech-item'><FontAwesomeIcon class='tech-icon' icon={faReact} /><span class='tech-item-name'>React</span></div>
                    <div class='tech-item'><FontAwesomeIcon class='tech-icon' icon={faAngular} /><span class='tech-item-name'>Angular</span></div>
                    <div class='tech-item'><FontAwesomeIcon class='tech-icon' icon={faNode} /><span class='tech-item-name'>NodeJS</span></div>
                    <div class='tech-item'><FontAwesomeIcon class='tech-icon' icon={faGit} /><span class='tech-item-name'>Git Version Control</span></div>
                    <div class='tech-item'><FontAwesomeIcon class='tech-icon' icon={faJs} /><span class='tech-item-name'>JavaScript</span></div>
                    <div class='tech-item'><FontAwesomeIcon class='tech-icon' icon={faHtml5} /><span class='tech-item-name'>HTML5</span></div>
                    <div class='tech-item'><FontAwesomeIcon class='tech-icon' icon={faCss3} /><span class='tech-item-name'>CSS3</span></div>
                    <div class='tech-item'><FontAwesomeIcon class='tech-icon' icon={faAws} /><span class='tech-item-name'>AWS</span></div>
                    <div class='tech-item'><FontAwesomeIcon class='tech-icon' icon={faBootstrap} /><span class='tech-item-name'>Bootstrap</span></div>
                    <div class='tech-item'>MongoDB</div>
                    <div class='tech-item'>PostgreSQL</div>
                    <div class='tech-item'>MySQL</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
)
}

export default Technology