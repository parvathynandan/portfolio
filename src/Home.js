import { Fragment } from 'react'
import './styles.css'

function Home() {
    return (
      <Fragment id="home">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-4 order-sm-2 cont mypic-home-div"><img class="mypic-home" src={require('./portfolio-pics/mypic-home.jpg')} /></div>
                <div class="col-sm-8 order-sm-1 cont content-home-div">
                    <p class="hello-world"><span>Hello </span><span>World!</span></p> 
                    <p class="name-intro"><span>This is </span><span>PARVATHY NANDAKUMAR</span></p>
                </div>
            </div>
        </div>
      </Fragment>
    );
  }
  
  export default Home;