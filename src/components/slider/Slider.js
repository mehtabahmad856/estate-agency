import React from 'react'
import { Carousel } from 'react-bootstrap';
import First from "../../Images/slide-1.jpg"
import Second from "../../Images/slide-2.jpg"
import Third from "../../Images/slide-3.jpg"
// import Slider from 'react-slick';
// import { SliderData } from './HomeSliderData';
// import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider = () => {
    return (
        <>
        <Carousel>
     <Carousel.Item interval={1000}>
       <img
         className="d-block w-100"
         src={First}
         alt="First slide"
       />
       <Carousel.Caption className="caption1">
         <p style={{fontWeight:"900", fontSize:"15px", marginLeft:"25px"}} className="para">Doral, Florida 78345</p>
         <h1 style={{fontWeight:"900", marginLeft:"25px"}}>204 MOUNT OLIVE ROAD TWO</h1>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item interval={500}>
       <img
         className="d-block w-100"
         src={Second}
         alt="Second slide"
       />
       <Carousel.Caption>
       <p className="para">Doral, Florida 78345</p>
         <h1>204 MOUNT OLIVE ROAD TWO</h1>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={Third}
         alt="Third slide"
       />
       <Carousel.Caption>
       <p className="para">Doral, Florida 78345</p>
         <h1>204 MOUNT OLIVE ROAD TWO</h1>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
            
        </>
    )
}

export default Slider


