import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage1 from "../../Assets/images/carousel1.webp"
import CarouselImage2 from "../../Assets/images/carousel2.webp";
import CarouselImage3 from "../../Assets/images/carousel3.webp";
import CarouselImage4 from "../../Assets/images/carousel4.webp";
import CarouselImage5 from "../../Assets/images/carousel5.webp";
import "./style.css";

function ImageSliders() {
  return (
    <>
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="slider-image" src={CarouselImage1} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item> <Carousel.Item>
          <img className="slider-image" src={CarouselImage2} alt="CarouselImage2" />
        </Carousel.Item> 
        <Carousel.Item>
          <img className="slider-image" src={CarouselImage3} alt="CarouselImage3" /> 
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider-image" src={CarouselImage4} alt="CarouselImage4" />
        </Carousel.Item>   
         <Carousel.Item>
          <img className="slider-image" src={CarouselImage5} alt="CarouselImage5" />
        </Carousel.Item>
      </Carousel></div>
    </>
  );
}

export default ImageSliders;
