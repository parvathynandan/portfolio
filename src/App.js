import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Fragment } from 'react'
import './styles.css'
import './mediaqueries.css'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
