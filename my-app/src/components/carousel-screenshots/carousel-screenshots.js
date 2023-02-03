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
  
    return (
        <div className='team-slider'>
            <div className='form-container-screenshots'>
                <h3 className='h3-carousel'
                    tabIndex='0'>Скриншотов: 2
                </h3>
                <form action="http://localhost:3000/"
                    onClick={e => e.stopPropagation()}>
                    
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