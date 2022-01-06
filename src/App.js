import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
// import SideBar from './components/sidebar/SideBar';
// import HeroSection from '../components/HeroSection/HeroSection';
import reactDom from 'react-dom'
// import About from './component/About'
import { Switch, Route, Link } from 'react-router-dom'
// import Agency from './pages/Agency';
import Home from './pages/Home'
import About from './pages/About';
import Blog from './pages/Blog';
import Property from './pages/Property';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
// import Services from './Services';
// import { SliderData } from './pages/HomeSliderData';
// import Product from './container/Product';
// import React from 'react'
// import Addition from './component/Home'
// import e from 'express'




function App() {
  return (
    <>



      <Router>
        <Navbar />
        {/* <Services/> */}

        {/* <HeroSection /> */}


        {/* <SideBar /> */}



        <Switch>
          {/* <Route  path="/" exact><Agency /></Route> */}
          <Route path="/" exact><Home /></Route>
          <Route path="/about" ><About /></Route>
          <Route path="/property"><Property /></Route>
          <Route path="/blog"><Blog /></Route>
          <Route path="/pages"><Pages /></Route>
          <Route path="/contact"><Contact /></Route>

        </Switch>







      </Router>

    </>







  );
}

export default App; 
