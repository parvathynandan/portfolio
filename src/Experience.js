import { Fragment, useEffect } from "react"
import { titleRevealAnimation } from "./animations";
import downwardarrow from './portfolio-pics/angle-bottom-icon.svg'

const Experience = () => {

    useEffect(() => {
        titleRevealAnimation() 
    }, [])
    return (
        <Fragment>
            <div className="experience-container">
                <div className="experiencesection">
                 <div class='experience-head-section'>
                    <div>
                        <h1 class="revealUp">Experience Highlights</h1>
                        <p className="company-name">QBurst Technologies: <span>July 2019 - June 2023</span></p>
                        <p className="company-role-description">As a full-stack JavaScript developer, I seamlessly transitioned 
                            between small and large teams, leaving my mark on diverse projects.
                            From building a Booking System to contributing to an e-Learning
                            Platform and Real Estate applications, I navigated both frontend
                            and backend streams. Starting as an engineer, I earned my stripes
                                and climbed the ranks to Senior Engineer, all while making impactful
                                contributions across various domains</p>
                    </div>
                    <div class='arrow-container'>
                        <img class="arrow bounce" src={downwardarrow} style={{ fill: 'red' }}  />
                    </div>
                    
                 </div>

                <hr />
                <p class='project-list-item'> Worked as a Full Stack Senior Engineer in building a token booking
                 platform which enables the business users to create event profiles 
                 and the customers to make bookings in any available time slot. </p>
                <hr />
                <p class='project-list-item'>Worked as an Engineer in developing a web app for a leading sports company that enables administrators to upload
                   and manage training lessons and courses, using modern web development technologies 
                   and frameworks to deliver an engaging user experience.</p>
                <hr />
                <p class='project-list-item'>
                 Worked as an Engineer in developing a web app for a leading sports company that enables administrators to upload
                 and manage training lessons and courses, using modern web development technologies 
                 and frameworks to deliver an engaging user experience.
                </p>
                <hr />
                <div className="exp-item">
                <p>
                Worked as a Full Stack Senior Engineer in building a token booking
                 platform which enables the business users to create event profiles 
                 and the customers to make bookings in any available time slot. 
                </p>
                <ul className="experience-list">
                    <li>Actively contributed to architecture, backend - Node.js, frontend - React areas and testing areas of the project. </li>
                    <li>Collaborated closely with stakeholders to comprehend their needs and effectively translated these insights into functional features</li>
                    <li>Developed the main feature of the application that lets businesses create and edit their floor maps</li>
                    <li>Designed and built a complementary application that helps users book seats in a particular slot in a preferred business.</li>
                    <li> Proficiently implemented payment gateway integration to facilitate user subscription to diverse service plans.</li>
                    <li>Designed and built a token board system to announce the upcoming bookings in the business and change their statuses. </li>
                    <li>Developed and implemented RESTful APIs.</li>
                    <li>Created clear and easy-to-follow project documentation to help everyone understand and use the project effectively. </li>
                </ul>
                </div>

                <div className="exp-item">
                    <p>Worked as an Engineer in developing a web app for a leading sports company that enables administrators to upload
                         and manage training lessons and courses, using modern web development technologies 
                         and frameworks to deliver an engaging user experience.</p>
                    <ul className="experience-list">
                        <li>Developed reusable Angular components for efficient project implementation. </li>
                        <li>Developed a feature-rich video player with all essential functionalities 
                            for seamless lesson playback within the course. Implemented an intelligent 
                            'resume playback' feature that remembers the user's exact position in the video, ensuring a smooth continuation of lessons upon return </li>
                        <li>Implemented seamless login and logout functionality, integrating popular social media platforms such as Google and Facebook, providing
                             users with convenient and secure authentication options.</li>
                        <li>Have done requirement analysis, discussions to enhance code reusability </li>
                        <li>Thorough observation of the code to avoid future fixes and responsibly fixing
                             bugs that might occur. </li>
                        <li> Ensuring that the code is free of lint errors and that a
                             good coding practice is followed throughout the code. </li>
                        <li>
                        Completion of unit test case integration on a regular basis.
                        </li>
                        <li>
                        Presentation of Client and internal demos.
                        </li>
                    </ul>
                </div>

                <div className="exp-item">
                    <p>
                    This project encompasses the hosting and continuous maintenance of a 
                    portfolio of websites for a prominent Real Estate group. Our maintenance 
                    scope extends to implementing fixes and enhancements in response to client requests.
                    </p>
                    <ul className="experience-list">
                        <li>
                        Developed websites tailored to client specifications, which entailed designing visually
                         appealing and mobile-responsive web pages to ensure a seamless and attractive user experience. 
                        </li>
                        <li>
                        Implemented SEO principles to increase search engine visibility.
                        </li>
                        <li>
                        Maintained proactive communication with clients, regularly providing updates,
                         addressing inquiries, estimating their needs, and accommodating requested edits
                        </li>
                        <li>
                        Conducted peer code reviews to assess and provided feedback on their contributions. 
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Experience