import { Fragment, useEffect } from "react"
import { titleRevealAnimation } from "./animations";

const About = () => {
    useEffect(() => {
        titleRevealAnimation() 
    }, [])
    return (
        <Fragment>
            <div id='about' class='flip-card'>
                <div class='flip-card-inner'>
                    <div class='about-us-container flip-card-front'>
                        <p class='whoami-title'>Who Am 1?</p>
                    </div>
                    <div className="about-us-container flip-card-back">
                        <div className="container">
                            <div class="row align-items-center">
                                <p className="col-sm-6 whoami-title revealUp">Who am I?</p>
                                <p className="col-sm-6 whoami-desc">
                                I'm Parvathy Nandakumar, a versatile software developer with 4 years of expertise in
                                JavaScript, TypeScript, React, Angular, Node.js, and more.
                                I specialize in crafting dynamic web experiences and have conquered
                                realms like Real Estate, Booking, and E-learning platforms.
                                    With a strong backend game in Node.js and Express, 
                                    I create robust APIs and server-side solutions. 
                                    HTML and CSS are my artistic tools. Let's collaborate
                                    and turn your ideas into digital reality. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About