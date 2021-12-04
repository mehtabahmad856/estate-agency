import React from 'react'
import Slider from '../components/slider/Slider';
import Services from '../components/services/Services';
import Properties from '../components/properties/Properties';
import PropertySlider from '../components/propertyslider/PropertySlider';
import Agents from '../components/agents/Agents';
import LatestNews from '../components/latestnews/LatestNews';

const Home = () => {
  



    return (
        <>
        <Slider />
       <Services/>
       <Properties />
       <PropertySlider />
       <Agents />
       <LatestNews />
          
  
   
       </>
    )
}

export default Home;
