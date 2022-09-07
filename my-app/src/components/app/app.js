import React, {useEffect, useState} from 'react'
import AppHeader from '../app-header/app-header';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';
// import Modal from '../modal/modal';
import CarouselPartisipants from '../carousel-partisipants/carousel-partisipants';
import CarouselScreenshots from '../carousel-screenshots/carousel-screenshots';
import BackToTopButton from '../backToTopButton/backToTopButton'

import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'

import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import { Avatar, Upload } from 'antd';

import './app.css'

const props = {
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
  
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
  
        reader.onload = () => {
          const img = document.createElement('img')
          img.src = reader.result
  
          img.onload = () => {
            const canvas = document.createElement('canvas')
            canvas.width = img.naturalWidth
            canvas.height = img.naturalHeight
            const ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0)
            ctx.fillStyle = 'red'
            ctx.textBaseline = 'middle'
            ctx.font = '33px Arial'
            ctx.fillText('Ant Design', 20, 20)
            canvas.toBlob((result) => resolve(result))
          }
        }
      })
    }
  }

const App = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({name})
        console.log({description})
        
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    },
    onScrollToElement = () => {
        const element = document.getElementById('scrollToAboutUs');
        element.scrollIntoView({block: "start", behavior: "smooth"})
    }            
        return (
            <Container>
                <Row>
                    <Col xs={3} className='side-bar'>
                        <Accordion className='accordion' defaultActiveKey="1" alwaysOpen flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header >Список участников</Accordion.Header>
                                <Accordion.Body className='accordion-header'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Avatar src={require("../../images/Thayorn.jpg")} style={{marginRight: '20px'}} />
                                            Тайорн
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar src={require("../../images/Less.jpg")} style={{marginRight: '20px'}}/>
                                            Лэс
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar src={require("../../images/Kven.jpg")} style={{marginRight: '20px'}}/>
                                            Квен
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar src={require("../../images/Melonblast.jpg")} style={{marginRight: '20px'}}/>
                                            Мелонбласт
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar src={require("../../images/Stuffing.jpg")} style={{marginRight: '20px'}}/>
                                            Стаффинг
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar src={require("../../images/Nick.png")} style={{marginRight: '20px'}}/>
                                            Шкотофка
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="1" >
                                <Accordion.Header>Добавить участника</Accordion.Header>
                                    <form action='#'
                                            method='post' 
                                            encType='multipart/form-data' 
                                            onClick={e => e.stopPropagation()}
                                            onSubmit={handleSubmit}>   
                                        <Accordion.Body 
                                            >                                    
                                            <Upload {...props}>
                                                <Button icon={<UploadOutlined />} 
                                                    style={{marginBottom: '15px'}}
                                                    variant="outline-primary">Выбрать портрет
                                                </Button>
                                            </Upload>

                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="имя персонажа"
                                                className="mb-3"
                                                >
                                                <Form.Control required
                                                    type="text" 
                                                    placeholder="nickname"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)} />
                                            </FloatingLabel>
                                            <FloatingLabel 
                                                controlId="floatingPassword"
                                                label="краткое описание">
                                                <Form.Control required
                                                    type="text" 
                                                    placeholder="Краткое описание"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}/>
                                            </FloatingLabel>
                                            <Button className='button-sider'
                                                variant='secondary'
                                                type='submit'
                                                tabIndex={0}>Добавить
                                            </Button>{''}
                                        </Accordion.Body>
                                    </form> 
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Добавить скриншот в ленту</Accordion.Header>
                                    <form action='#'
                                        method='post' 
                                        encType='multipart/form-data' 
                                        onClick={e => e.stopPropagation()}
                                        onSubmit={handleSubmit}>
                                        <Accordion.Body>
                                            <Upload {...props}>
                                                <Button icon={<UploadOutlined />} 
                                                    style={{marginBottom: '15px'}}
                                                    variant="outline-primary">Выбрать скриншот
                                                </Button>
                                            </Upload>
                                            <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="название"
                                                    className="mb-3"
                                                >
                                                    <Form.Control type="text" placeholder="nickname" required/>
                                                </FloatingLabel>
                                                <FloatingLabel controlId="floatingPassword" label="краткое описание">
                                                    <Form.Control type="text" placeholder="Краткое описание" required/>
                                                </FloatingLabel>
                                                <Button className='button-sider'
                                                    variant='secondary'
                                                    type='submit'
                                                    tabIndex={0}
                                                >Добавить
                                                </Button>{''}
                                        </Accordion.Body>
                                    </form>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={7}>
                        <div className='app'>
                            <AppHeader onScrollToElement={onScrollToElement}/>
                            <CarouselPartisipants />
                            <AboutUs />
                            <CarouselScreenshots 
                                name={name} 
                                description={description}
                                />
                            <AppFooter scrollUp={scrollUp}/>
                            <BackToTopButton/>
                        </div>
                    </Col>
                    <Col className='chat'>ЧАТ УЧАСТНИКОВ</Col>
                </Row>
            </Container>
        )
    }
// }

export default App;