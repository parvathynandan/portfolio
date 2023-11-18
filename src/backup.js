import { Fragment } from 'react'
import './styles.css'
import './styles.scss'
function Home() {
    return (
      <Fragment id="home">
        <div className='home-container'>
        <div class="container homesection">
            <div class="row align-items-center">
                <div class="col-sm-4 order-sm-2 cont mypic-home-div"><img class="mypic-home" src={require('./portfolio-pics/mypic-home.jpg')} /></div>
                <div class="col-sm-8 order-sm-1 cont content-home-div text-center">
                    {/* <p class="hello-world"><span>Hello </span><span>World! </span></p>  */}


                    <div class="content">
                      <div class="content__container">
                         <p class="content__container__text">
                            Hello
                          </p>    
                        <ul class="content__container__list">
                          <li class="content__container__list__item">world !</li>
                          <li class="content__container__list__item">bob !</li>
                          <li class="content__container__list__item">users !</li>
                          <li class="content__container__list__item">everybody  !</li>
                        </ul>
                      </div>
                    </div>



                    <p class="name-intro"><span>This is </span><span>PARVATHY NANDAKUMAR</span></p>
                </div>
            </div>
        </div>
        </div>
      </Fragment>
    );
  }
  
  export default Home;