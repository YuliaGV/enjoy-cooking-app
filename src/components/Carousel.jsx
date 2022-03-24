import React from 'react'
import {Carousel} from 'react-bootstrap';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';

export const CarouselDiv = () => {
    return (
        <div>
            <div className="carousel-container">
                <Carousel style={{ marginTop: '0.5rem' }}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{ fontSize: '1.2rem'}}>Recipes of the world</h3>
                    <p style={{ fontSize: '1rem' }}>Explore the world in flavors</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{ fontSize: '1.2rem'}}>New recipes every day</h3>
                    <p style={{ fontSize: '1rem' }}>You'll be surprised at each visit</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{ fontSize: '1.2rem'}}>What do you want to eat today?</h3>
                    <p style={{ fontSize: '1rem' }}>Recipes for every moment of the day</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

            </div>

            
        </div>
    )
}
