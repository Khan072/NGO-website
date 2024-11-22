import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VolunteerSection from './components/VolunteerSection';
import Footer from './components/Footer';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Volunteer from './components/Volunteer';
import ArtCraft from './components/ArtCraft';
import Causes from './components/Causes';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import DanceAndMusic from './components/DanceAndMusic';
import NewsList from './components/NewsList';








const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <Router>
    <AppContainer>
      <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/volunteer' element={<Volunteer/>}/>
      <Route path='/artcraft' element={<ArtCraft/>}/>
      <Route path='/causes' element={<Causes/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/dancemusic' element={<DanceAndMusic/>}/>
      <Route path='/news' element={<NewsList/>}/>

      
      
    </Routes>
      <Footer />
    </AppContainer>
  </Router>
  );
}

export default App;
