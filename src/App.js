import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Technology from './Technology';


import { Fragment } from 'react'
import './styles.css'
import './mediaqueries.css'



function App() {



  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Technology />
    </Fragment>
  );
}

export default App;
