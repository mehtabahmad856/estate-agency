// import React from 'react'
// import Slider from 'react-slick';
import Image1 from '../../Images/property-1.jpg';
import Image2 from '../../Images/property-2.jpg';
import Image3 from '../../Images/property-3.jpg';
import Image4 from '../../Images/property-4.jpg';
// import {CardWrapper,Card,CardImage,Img,ParaH2,ParaP,ParaP1} from "./PropertySliderElements"
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Carousel } from 'react-bootstrap';
// import First from '../../Images/property-1.jpg'
import {
  Container,
  Property,
  Slide,
  Heading,
  Property1,
  SlideImage,
  Property2,
  Slide3,
  Property3,
  Slide4,

} from './PropertySliderElements';
const PropertySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };
  return (
    <>

      <Container>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
         <Slide>
           <SlideImage src={Image1}/>
           <Heading>206 Mount Olive Road Two</Heading>
         </Slide>

         <Slide>
         <SlideImage src={Image2}/>
         <Heading>206 Mount Olive Road Two</Heading>
         </Slide>

         <Slide>
         <SlideImage src={Image3}/>
         <Heading>206 Mount Olive Road Two</Heading> 
         </Slide>

         <Slide>
         <SlideImage src={Image4}/>
         <Heading>206 Mount Olive Road Two</Heading>
         </Slide>

         

        </Slider>
      </Container>

    </>
  )
}

export default PropertySlider;
