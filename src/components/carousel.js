import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './component.css';



function DarkVariantExample() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <a target="_blank" href="https://e-commerce-website-masoudsaed.netlify.app/">
                    <img
                    className="d-block w-100 slide-img"
                    src={"./images/Ecomm.jpg"}
                    alt="Ecommerce Website"
                    /></a> 
                <Carousel.Caption className="carousel-caption">
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a target="_blank" href="https://socialmedia-platform-masoudsaed.netlify.app/">
                    <img
                    className="d-block w-100 slide-img"
                    src={"./images/SOC.jpg"}
                    alt="Social website"
                    /></a>
                <Carousel.Caption className="carousel-caption">
                    <h5>Social Platform</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a target="_blank" href="https://freedom-music.netlify.app/">
                    <img
                    className="d-block w-100 slide-img"
                    src={"./images/jam.jpg"}
                    alt="Third slide"
                    
                    /></a>
                <Carousel.Caption className="carousel-caption">
                    <h5>Music PlayList</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;