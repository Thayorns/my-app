import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../carousel-partisipants/carousel-partisipants.css'

const CarouselScreenshots = ({data}) => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className='team-slider'>
            <h3 className='h3-carousel'
                tabIndex='0'>Скриншотов: 2</h3>
            <Carousel activeIndex={index} 
                onSelect={handleSelect}
                className='carousel-wrapper'
                fade>
            
                <Carousel.Item className='carousel-item'>
                    <img className="d-block w-100"
                        src={require("../../images/team-screenshot.jpg")}
                        alt="First slide"
                        style={{height: '550px'}}/>                    
                    <Carousel.Caption>
                        <h3>Гробница Королей</h3>
                        <p>15-й ключ в тайм</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../images/nagrand.jpg")}
                        alt="Second slide"
                        style={{height: '550px'}}
                    />

                    <Carousel.Caption>
                        <h3>Награнд</h3>
                        <p>лучшее место для пикника у обочины</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                
        
            </Carousel>
        </div>
    )
}
export default CarouselScreenshots