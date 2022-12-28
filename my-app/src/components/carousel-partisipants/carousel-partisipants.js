import React, { useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Upload}  from 'antd'

// import 'bootstrap/dist/css/bootstrap.min.css';
import {UploadOutlined, DeleteOutlined} from '@ant-design/icons'
import './carousel-partisipants.css'

const CarouselPartisipants = ({data, setData}) => {
    const {Dragger} = Upload

    const [index, setIndex] = useState(0)    
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }

    const deleteParticipant = (id) => {
        let newArr = [...data].filter(item => item.id !== id)
        setData(newArr)
    }

    useEffect (() => {
        window.addEventListener('resize', () => {
            const form = document.querySelector('.form-container')
            const carousel = document.querySelector('.carousel-container')
            if(window.innerWidth < 1024) {
                form.style.cssText = `width: 0px; height: 0px, opasity: 0`
                carousel.style.cssText = `width: 100%; height: 100%`
            }else if(window.innerWidth > 768) {
                form.style.cssText = `width: 207px; height: 510px, opasity: 1`
                carousel.style.cssText = `width: 700px; height: 482px`
            }
        })
      }, [])
  
    return (
        <div className='team-slider'>
            
            <div className='form-container'>
                <h3 className='h3-carousel'
                    tabIndex='0'>Участников: {data.length}
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
                        label="Имя"
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
            <div className='carousel-container' style={{maxWidth: '700px', minWidth: '700px'}}>
                <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-wrapper' fade>
                    {
                        data.map( item => (
                            <Carousel.Item className='carousel-item' key={item.name}>
                                
                                <img className="d-block w-100"
                                    src={item.img}
                                    alt={item.alt}
                                    style={{height: '482px',
                                    marginTop: '15px'}}
                                />                            
                                <Carousel.Caption>
                                    <h3>{item.name}
                                        <DeleteOutlined className='button-delete-person'
                                            style={{
                                                // borderColor: 'red',
                                                // color: 'red',
                                                // marginTop: '15px',
                                                float: 'right'
                                            }}
                                            onClick={() => deleteParticipant(item.id)}>Удалить
                                        </DeleteOutlined>
                                    </h3>
                                    <p>{item.description}</p>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
export default CarouselPartisipants