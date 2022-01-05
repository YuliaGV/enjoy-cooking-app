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
                    <h3 style={{ fontSize: '1.8rem'}}>Recetas del mundo</h3>
                    <p style={{ fontSize: '1.4rem' }}>En la variedad está el placer y en Enjoy Cooking lo sabemos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{ fontSize: '1.8rem'}}>Nuevas recetas cada día</h3>
                    <p style={{ fontSize: '1.4rem' }}>Sorpréndete en cada visita, nos actualizamos cada día</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{ fontSize: '1.8rem'}}>¿Qué se te antoja hoy?</h3>
                    <p style={{ fontSize: '1.4rem' }}>Tenemos recetas para todos tus propósitos, ¡te encantarán!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

            </div>

            
        </div>
    )
}
