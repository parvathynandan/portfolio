import { Fragment, useEffect, useState } from "react";
import { titleRevealAnimation, sidewaysRevealAnimation } from "./animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import Collapse from "./Collapse";
const Experience = () => {
  useEffect(() => {
    titleRevealAnimation();
    sidewaysRevealAnimation();
  }, []);
  const [collapseValue, setCollapseValue] = useState({
    projectItem1: false,
    projectItem2: false,
    projectItem3: false,
    projectItem4: false,
    projectItem5: false,
    projectItem6: false,
  });

  const toggle = (key) => {
    if (key === 1) {
      setCollapseValue({
        ...collapseValue,
        projectItem1: !collapseValue.projectItem1,
      });
    } else if (key === 2) {
      setCollapseValue({
        ...collapseValue,
        projectItem2: !collapseValue.projectItem2,
      });
    } else if (key === 3) {
      setCollapseValue({
        ...collapseValue,
        projectItem3: !collapseValue.projectItem3,
      });
    } else if (key === 4) {
      setCollapseValue({
        ...collapseValue,
        projectItem4: !collapseValue.projectItem4,
      });
    } else if (key === 5) {
      setCollapseValue({
        ...collapseValue,
        projectItem5: !collapseValue.projectItem5,
      });
    } else {
      setCollapseValue({
        ...collapseValue,
        projectItem6: !collapseValue.projectItem6,
      });
    }
  };

  return (
    <Fragment>
      <div id="experience" className="experience-container">
        <div className="experiencesection">
          <div class="experience-head-section">
            <div>
              <h1 class="revealUp">Experience Highlights</h1>
              <p className="company-name">
                Mpac: <span>May 2024 - Pre</span>
              </p>
              <p className="revealSide company-role-description">
                At Mpac, I worked on modernizing a legacy application by
                transitioning it to Next.js, resulting in better performance and
                maintainability. I developed responsive and user-friendly
                interfaces, handled complex forms, and integrated backend APIs
                to ensure smooth user experiences. I also contributed to
                improving an existing Angular app, managed updates and
                dependencies, and focused on creating clean, scalable, and
                high-quality frontend solutions
              </p>
            </div>
            <div class="arrow-container">
              <FontAwesomeIcon class="arrow bounce" icon={faAngleDoubleDown} />
            </div>
          </div>

          <hr />
          <p onClick={() => toggle(1)} class="revealUp project-list-item">
            {!collapseValue.projectItem1 && (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
            {collapseValue.projectItem1 && <FontAwesomeIcon icon={faArrowUp} />}
            &nbsp;Worked as a Frontend Developer in creating a web app for
            modernizing a legacy system, focusing on responsive UI, performance
            optimization, and seamless backend integration using modern React
            and Next.js practices.{" "}
          </p>
          <Collapse isOpen={collapseValue.projectItem1}>
            <div className="exp-item">
              <ul className="experience-list">
                <li>
                  Transformed detailed design mockups into functional,
                  responsive React components, adhering to best practices and
                  design guidelines.{" "}
                </li>
                <li>
                  Developed a new Next.js application by converting an existing
                  application, optimizing performance, improving
                  maintainability, and leveraging modern React features.
                </li>
                <li>
                  Worked with forms featuring complex validation rules using
                  React Hook Form and Zod schemas, ensuring robust user input
                  handling and seamless integration with backend APIs.
                </li>
                <li>
                  {" "}
                  Ensured packages were kept up-to-date by tracking and managing
                  pull requests from Dependabot, minimizing security risks and
                  maintaining project stability.
                </li>
                <li>
                  Employed Tailwind to create responsive, mobile-first web
                  pages, ensuring a consistent and professional user interface
                  across different devices and screen sizes.es.{" "}
                </li>
                <li>
                  Integrated APIs in the Next.js application by connecting it
                  with a backend, ensuring seamless data flow and optimized
                  performance for a robust user experience.
                </li>
                <li>
                  Employed Redux for state management, facilitating the handling
                  of complex application states and ensuring a scalable
                  architecture.{" "}
                </li>
                <li>
                  Enhanced and fixed bugs in an existing Angular application,
                  improving overall functionality and user experience.
                </li>
                <li>
                  Implemented complex forms in React, leveraging react-hook-form
                  for efficient form validation and state management.
                </li>
                <li>
                  Optimized the React application by employing code-splitting
                  with React.lazy and Suspense, and implementing memoization
                  techniques with React.memo to boost performance.
                </li>
              </ul>
            </div>
          </Collapse>

          <hr />
        </div>
      </div>

      <div id="experience" className="experience-container">
        <div className="experiencesection">
          <div class="experience-head-section">
            <div>
              <p className="company-name">
                Vosyn AI -Toronto, Canada: <span>Jan 2024 - May 2024</span>
              </p>
              <p className=" company-role-description">
                Worked as a Frontend Developer and later as a Product Lead on
                Vosyn AI, an advanced localization platform combining voice,
                video, text, and image technologies. Designed and developed
                responsive UIs using React and Tailwind CSS, implemented secure
                authentication with AWS Amplify, and integrated interactive maps
                via Mapbox and Google Maps. Transitioned into a leadership role,
                where I coordinated cross-functional teams, managed release
                planning, estimated tasks, reviewed deliverables, and ensured
                high-quality outputs through thorough testing and documentation.
              </p>
            </div>
            <div class="arrow-container">
              <FontAwesomeIcon class="arrow bounce" icon={faAngleDoubleDown} />
            </div>
          </div>

          <hr />
          <p onClick={() => toggle(2)} class=" project-list-item">
            {!collapseValue.projectItem2 && (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
            {collapseValue.projectItem2 && <FontAwesomeIcon icon={faArrowUp} />}
            &nbsp;As a Software Product Lead ...{" "}
          </p>
          <Collapse isOpen={collapseValue.projectItem2}>
            <div className="exp-item">
              <ul className="experience-list">
                <li>
                  Proficiently developed and meticulously reviewed comprehensive
                  deliverables lists for each release within the project
                  roadmap, ensuring accuracy and error-free documentation.{" "}
                </li>
                <li>
                  Collaborating closely with various teams including Frontend,
                  Backend, UI/UX, and QA to ensure seamless communication and
                  coordination.
                </li>
                <li>
                  Estimating tasks for different releases and conducting
                  thorough quality checks to ensure error-free
                  deliverables.Accurately estimating the scope of work for each
                  release cycle and meticulously verifying deliverables to
                  maintain a high standard of quality and minimize errors.
                </li>
              </ul>
            </div>
          </Collapse>
          <hr />
          <p onClick={() => toggle(3)} class=" project-list-item">
            {!collapseValue.projectItem3 && (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
            {collapseValue.projectItem3 && <FontAwesomeIcon icon={faArrowUp} />}
            &nbsp;As a Front-End Developer ...{" "}
          </p>
          <Collapse isOpen={collapseValue.projectItem3}>
            <div className="exp-item">
              <ul className="experience-list">
                <li>
                  Designing and Implementation of responsive layouts, forms, and
                  interactive components using React, HTML, Tailwind CSS.{" "}
                </li>
                <li>
                  Implemented login and sign-up authentication using AWS
                  Amplify, ensuring secure user management and integration with
                  AWS services.
                </li>
                <li>
                  Integrated Mapbox and Google Maps to display interactive maps
                  with pins, enabling dynamic geolocation-based features.
                </li>
                <li>
                  Translated ambiguous requirements into functional features by
                  working closely with professionals and stakeholders to
                  understand their needs and by implementing complex business
                  logic and workflows within the React application.
                </li>
                <li>
                  Leveraged Fetch and Axios libraries in React to establish
                  efficient asynchronous data fetching and handling from RESTful
                  APIs, ensuring seamless communication between the front-end
                  and back-end, resulting in enhanced application performance
                  and responsiveness
                </li>
                <li>
                  Documented the project comprehensively, providing clear
                  guidelines for usage and maintenance, and managed the team to
                  ensure effective coordination and timely delivery of tasks.
                </li>
              </ul>
            </div>
          </Collapse>

          <hr />
        </div>
      </div>
      <div id="experience" className="experience-container">
        <div className="experiencesection">
          <div class="experience-head-section">
            <div>
              <p className="company-name">
                QBurst Technologies: <span>July 2019 - June 2023</span>
              </p>
              <p className=" company-role-description">
                As a full-stack JavaScript developer, I seamlessly transitioned
                between small and large teams, leaving my mark on diverse
                projects. From building a Booking System to contributing to an
                e-Learning Platform and Real Estate applications, I navigated
                both frontend and backend streams. Starting as an engineer, I
                earned my stripes and climbed the ranks to Senior Engineer, all
                while making impactful contributions across various domains
              </p>
            </div>
            <div class="arrow-container">
              <FontAwesomeIcon class="arrow bounce" icon={faAngleDoubleDown} />
            </div>
          </div>

          <hr />
          <p onClick={() => toggle(4)} class=" project-list-item">
            {!collapseValue.projectItem4 && (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
            {collapseValue.projectItem4 && <FontAwesomeIcon icon={faArrowUp} />}
            &nbsp; Worked as a Full Stack Senior Engineer in building a Token
            Booking platform which enables the business users to create event
            profiles and the customers to make bookings in any available time
            slot.{" "}
          </p>
          <Collapse isOpen={collapseValue.projectItem4}>
            <div className="exp-item">
              <ul className="experience-list">
                <li>
                  Actively contributed to architecture, backend - Node.js,
                  frontend - React areas and testing areas of the project.{" "}
                </li>
                <li>
                  Collaborated closely with stakeholders to comprehend their
                  needs and effectively translated these insights into
                  functional features
                </li>
                <li>
                  Designed and built an application that helps businesses create
                  event profiles and users to book seats in an event slot.
                </li>
                <li>
                  {" "}
                  Proficiently implemented payment gateway integration to
                  facilitate user subscription to diverse service plans.
                </li>
                <li>
                  Designed and built a token board system to announce the
                  upcoming bookings in the business and change their statuses.{" "}
                </li>
                <li>Developed and implemented RESTful APIs.</li>
                <li>
                  Created clear and easy-to-follow project documentation to help
                  everyone understand and use the project effectively.{" "}
                </li>
              </ul>
            </div>
          </Collapse>
          <hr />
          <p onClick={() => toggle(5)} class=" project-list-item">
            {!collapseValue.projectItem4 && (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
            {collapseValue.projectItem4 && <FontAwesomeIcon icon={faArrowUp} />}
            &nbsp; Worked as an Engineer in developing a web app for a leading
            sports company that enables administrators to upload and manage
            training lessons and courses, using modern web development
            technologies and frameworks to deliver an engaging user experience.
          </p>
          <Collapse isOpen={collapseValue.projectItem5}>
            <div className="exp-item">
              <ul className="experience-list">
                <li>
                  Developed reusable Angular components for efficient project
                  implementation.{" "}
                </li>
                <li>
                  Developed a feature-rich video player with all essential
                  functionalities for seamless lesson playback within the
                  course. Implemented an intelligent 'resume playback' feature
                  that remembers the user's exact position in the video,
                  ensuring a smooth continuation of lessons upon return{" "}
                </li>
                <li>
                  Implemented seamless login and logout functionality,
                  integrating popular social media platforms such as Google and
                  Facebook, providing users with convenient and secure
                  authentication options.
                </li>
                <li>
                  Have done requirement analysis, discussions to enhance code
                  reusability{" "}
                </li>
                <li>
                  Thorough observation of the code to avoid future fixes and
                  responsibly fixing bugs that might occur.{" "}
                </li>
                <li>
                  {" "}
                  Ensuring that the code is free of lint errors and that a good
                  coding practice is followed throughout the code.{" "}
                </li>
                <li>
                  Completion of unit test case integration on a regular basis.
                </li>
                <li>Presentation of Client and internal demos.</li>
              </ul>
            </div>
          </Collapse>

          <hr />
          <p onClick={() => toggle(6)} class=" project-list-item">
            {!collapseValue.projectItem6 && (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
            {collapseValue.projectItem6 && <FontAwesomeIcon icon={faArrowUp} />}
            &nbsp; Worked as an Engineer in developing a web app for a leading
            sports company that enables administrators to upload and manage
            training lessons and courses, using modern web development
            technologies and frameworks to deliver an engaging user experience.
          </p>
          <Collapse isOpen={collapseValue.projectItem5}>
            <div className="exp-item">
              <ul className="experience-list">
                <li>
                  Developed websites tailored to client specifications, which
                  entailed designing visually appealing and mobile-responsive
                  web pages to ensure a seamless and attractive user experience.
                </li>
                <li>
                  Implemented SEO principles to increase search engine
                  visibility.
                </li>
                <li>
                  Maintained proactive communication with clients, regularly
                  providing updates, addressing inquiries, estimating their
                  needs, and accommodating requested edits
                </li>
                <li>
                  Conducted peer code reviews to assess and provided feedback on
                  their contributions.
                </li>
              </ul>
            </div>
          </Collapse>
          <hr />
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
