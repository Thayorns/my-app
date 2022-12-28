import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Upload}  from 'antd'

// import 'bootstrap/dist/css/bootstrap.min.css';
import {UploadOutlined, DeleteOutlined} from '@ant-design/icons'

import '../carousel-partisipants/carousel-partisipants.css'
import '../carousel-screenshots/carousel-screenshots.css'

const CarouselScreenshots = ({data}) => {
    const [index, setIndex] = useState(0);
    const {Dragger} = Upload

  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    // useEffect (() => {
    //     window.addEventListener('resize', () => {
    //         const form = document.querySelector('.form-container-screenshots')
    //         const carousel = document.querySelector('.carousel-container-screenshots')
    //         if(window.innerWidth <= 768) {
    //             form.style.cssText = `width: 0px; height: 0px, opasity: 0`
    //             carousel.style.cssText = `width: 100%; height: 100%`
    //         }else if(window.innerWidth > 768) {
    //             form.style.cssText = `width: 207px; height: 510px, opasity: 1`
    //             carousel.style.cssText = `width: 700px; height: 482px`
    //         }else{
    //             form.style.cssText = `width: 0px; height: 0px, opasity: 0`
    //             carousel.style.cssText = `width: 100%; height: 100%`
    //         }
    //     })
    //   }, [])
  
    return (
        <div className='team-slider'>
            <div className='form-container-screenshots'>
                <h3 className='h3-carousel'
                    tabIndex='0'>Скриншотов: 2
                </h3>
                <form action="http://localhost:3000/">
                    
                    <Dragger  style={{padding: '16px 12px', 
                        // margin: '0 0 36px'
                        }}>
                        <p className="ant-upload-drag-icon" style={{height: '40px'}}>
                            <UploadOutlined />
                            <br/>выбери файл
                        </p>                        
                    </Dragger>    
                    
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Название скриншота"
                        className="mb-3"
                        style={{marginTop: '16px'}}
                    >
                        <Form.Control type="text" placeholder="игровой ник" style={{borderRadius: '0%'}}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="описание">
                        <Form.Control type="text" placeholder="немного о себе" style={{borderRadius: '0%'}} />
                    </FloatingLabel>
                    <Button className='submit-button' variant="outline-primary" type="submit">Добавить</Button>
                </form>

            </div>
            <div className='carousel-container-screenshots'
                // style={{maxWidth: '700px', minWidth: '700px'}}
            >
                <Carousel activeIndex={index} 
                    onSelect={handleSelect}
                    className='carousel-wrapper'
                    fade>
                
                    <Carousel.Item className='carousel-item'>
                        <img className="d-block w-100"
                            src={require("../../images/team-screenshot.jpg")}
                            alt="First slide"
                            style={{height: '482px',
                                marginTop: '15px'}}/>                    
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
                            style={{height: '482px',
                                marginTop: '15px'}}
                        />

                        <Carousel.Caption>
                            <h3>Награнд</h3>
                            <p>лучшее место для пикника у обочины</p>
                        </Carousel.Caption>
                    </Carousel.Item>            
                </Carousel>
            </div>
        </div>
    )
}
export default CarouselScreenshots