import React from 'react';
import './App.css';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './main/main';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './main/mainComponets/mainAbout';
import Projects from './main/mainComponets/mainProjects';
import Contact from './main/mainComponets/mainContact';
import Resume from './main/mainComponets/mainResume';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className=''>
          <Route path='/about' 
                render={ () => <About /> } />
          <Route path='/projects' 
                render={ () => <Projects /> } />
          <Route path='/contact' 
                render={ () => <Contact /> } />
          <Route path='/resume' 
                render={ () => <Resume /> } />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
