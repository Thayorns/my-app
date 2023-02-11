import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import {UploadOutlined, DeleteOutlined} from '@ant-design/icons'

import '../carousel-partisipants/carousel-partisipants.css'
import '../carousel-screenshots/carousel-screenshots.css'

const CarouselScreenshots = (props) => {
    const {setScreenshotName,setScreenshotDescription,handleScreenshotSubmit,
        deleteParticipant,indexScreenshot,setIndexScreenshot,screenshotImagePreviewUrl,
        setScreenshotImagePreviewUrl,dataScreenshots,setDataScreenshots} = props
  
    const handleSelect = (selectedIndex, e) => {
        setIndexScreenshot(selectedIndex);
    };
    const handlescreenshotChange = (e) => {
        e.preventDefault()
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onloadend = () => {
            setScreenshotImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
    }
    let imagePreviewScreenshot;
    if (screenshotImagePreviewUrl) {
        imagePreviewScreenshot = (<img src={screenshotImagePreviewUrl} alt='ingame portrait' style={{height: '100px',
        width: '100px'}}/>)

    }else{
        imagePreviewScreenshot = (<div className="previewText"></div>)
    }
    return (
        <div className='team-slider'>
            <div className='form-container-screenshots'>
                <h3 className='h3-carousel'
                    tabIndex='0'>Скриншотов: 2
                </h3>

                <form id='myForm' 
                    action='http://localhost:3000/'
                    onClick={(e) => {
                        e.stopPropagation()
                        
                    }}
                    method='post'
                    encType='multipart/form-data'
                    onSubmit={handleScreenshotSubmit}
                >
                    <div>
                        <input  
                            // style={{padding: '16px 12px'}}
                            type='file'
                            onChange={handlescreenshotChange}
                            required
                            // {...propDragger}
                            // beforeUpload={() => true}
                            // onChange={(e)=> setFile(e.target.files[0])}
                            // value={file}
                            >               
                        </input>
                        <div className='imagePreviewScreenshot'
                            style={{height: '100px',
                                width: '100px'}}
                                // value={imagePreviewUrl}
                        >
                            {imagePreviewScreenshot}
                        </div>  
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Имя"
                        className="mb-3"
                        style={{marginTop: '16px'}}
                    >
                        <Form.Control type="text"
                            placeholder="игровой ник" 
                            style={{borderRadius: '0%'}}
                            onChange={(e)=> setScreenshotName(e.target.value)}
                            name='screenshotName'
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="описание">
                        <Form.Control type="text"
                            placeholder="немного о себе" 
                            style={{borderRadius: '0%'}}
                            onChange={(e)=> setScreenshotDescription(e.target.value)}
                            name='screenshotDescription'
                            required />
                    </FloatingLabel>
                    <Button className='submit-button' 
                        variant="outline-primary" 
                        type="submit"                        
                        >
                        Добавить
                    </Button>
                </form>

            </div>
            <div className='carousel-container'
                // style={{maxWidth: '700px', minWidth: '700px'}}
            >
                <Carousel activeIndex={indexScreenshot} onSelect={handleSelect} className='carousel-wrapper' fade>
                    {dataScreenshots.map(item => (
                        <Carousel.Item className='carousel-item' key={item.screenshotName}>
                            <img className="d-block w-100"
                                src={item.img}
                                style={{height: '482px',marginTop: '15px'}}
                            />                         
                            <Carousel.Caption>
                                <h3>{item.screenshotName}
                                    <DeleteOutlined className='button-delete-person'
                                        style={{float: 'right'}}
                                        onClick={() => {
                                            if(dataScreenshots.length !== 1){deleteParticipant(item.id, dataScreenshots, setDataScreenshots)}
                                            setIndexScreenshot(0)}}>Удалить
                                    </DeleteOutlined>
                                </h3>
                                <p>{item.screenshotDescription}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
export default CarouselScreenshots