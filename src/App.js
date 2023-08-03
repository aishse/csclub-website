import './App.css';
import React from 'react'; 
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import HeroSection from './components/HeroSection'
function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <HeroSection/>
     </BrowserRouter>
    </>
  );
}

export default App;
