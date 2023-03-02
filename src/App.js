import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer  from './Footer';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/Service' element={<Service/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route path="*" element={<Navigate to ="/home" />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
