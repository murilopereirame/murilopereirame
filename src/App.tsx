import React from 'react';
import Intro from './Sections/Intro'
import './App.css';
import About from './Sections/About';
import Portifolio from './Sections/Portifolio';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

 
function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Portifolio />
      <Contact />
      <Footer />
    </div>    
  );
}

export default App;
