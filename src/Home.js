import { Fragment, useEffect } from 'react'
import './styles.css'
import './styles.scss'
import { titleRevealAnimation } from "./animations";
import resume from './NandakumarParvathy-Resume.pdf'

function Home() {
  useEffect(() => {
    titleRevealAnimation() 
}, [])

    return (
      <Fragment id="home">
        <div className='home-container'>
        <div class="container homesection">
            <div class="row align-items-center">
                <div class="col-md-4 order-md-2 cont mypic-home-div"><img class="mypic-home" src={require('./portfolio-pics/mypic-home.jpg')} /></div>
                <div class="col-md-8 order-md-1 cont content-home-div">
                    {/* <p class="hello-world"><span>Hello </span><span>World! </span></p>  */}


                    <div class="content">
                      <div class="content__container">
                         <p class="content__container__text">
                            Hello
                          </p>    
                        <ul class="content__container__list">
                          <li class="content__container__list__item">world!</li>
                          <li class="content__container__list__item">all!</li>
                          <li class="content__container__list__item">folks!</li>
                          <li class="content__container__list__item">pals!</li>
                        </ul>
                      </div>
                    </div>



                    <p class="name-intro revealUp"><span>This is </span><span>PARVATHY NANDAKUMAR</span></p>
                    <p class="name-desc desktop-name-desc">Crafting Digital Journeys: Meet Your Fullstack JavaScript Artisan</p>
                    <p class="name-desc mobile-name-desc first">Crafting Digital Journeys:</p>
                    <p class="name-desc mobile-name-desc second">Meet Your Fullstack JavaScript Artisan</p>
                    <a href='resume' target='_blank'>
                    <a class='download-resume' href={require("./NandakumarParvathy-Resume.pdf")} download="Parvathy-Nandakumar-Resume">Download Resume</a>
                    </a>
                </div>
            </div>
        </div>
        </div>
      </Fragment>
    );
  }
  
  export default Home;