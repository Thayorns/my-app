import React, {useEffect, useState} from 'react'
import AppHeader from '../app-header/app-header';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';
// import Modal from '../modal/modal';
import CarouselPartisipants from '../carousel-partisipants/carousel-partisipants';
import CarouselScreenshots from '../carousel-screenshots/carousel-screenshots';
import BackToTopButton from '../backToTopButton/backToTopButton'

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'

import { UploadOutlined } from '@ant-design/icons';
import { Avatar, Upload, Switch} from 'antd';

import './app.css';





const App = () => {

    const props = {
        action: 'http://localhost:3000/',
        listType: 'picture',
    
        beforeUpload(file,e) {
            return new Promise((resolve) => {
                let reader = new FileReader()
                let file = e.target.files[0]
                reader.onloadend = () => {
                    setFile({
                        file: file,
                        imagePreviewUrl: reader.result
                    })
                }
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
    
    const [sideColumn, setSideColumn] = useState(true)
    // const [appColumn, setAppColumn] = useState(true)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState({
        file: 0,
        imagePreview: 0
    })
    
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Тайорн',
            description: 'Шериф из Зулдазара',
            img: require("../../images/Thayorn.jpg")            
        },
        {
            id: 2,
            name: 'Лэс',
            description: 'Открытый любовник Сильваны Ветрокрылой.',
            img:  require("../../images/Less.jpg")            
        },
        {
            id: 3,
            name: 'Квен',
            description: 'Паладин-исключение из правил о паладинах. Убивает ластов в ключах соло.',
            img: require("../../images/Kven.jpg")            
        },
        {
            id: 4,
            name: 'Мелонбласт',
            description: 'Батя. Гладиатор. Любимец публики и Великий Оратор',
            img: require("../../images/Melonblast.jpg")            
        },
        {
            id: 5,
            name: 'Шкотофка',
            description: 'Защитник стойл при битве на Арати. Любит танцевать под луной',
            img: require("../../images/Nick.png")       
        },
        {
            id: 6,
            name: 'Стаффинг',
            description: 'Гладиатор. Гайд на прот-вара за душой',
            img: require("../../images/Stuffing.jpg")
        },
    ])
    
    // while(window.innerWidth < 1024) {
    //     const appColumnSize = document.querySelector('.app')
    //     appColumnSize.style.cssText = `
    //         width: 500px`
    // }
    
      
    useEffect (() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 1024) {
                setSideColumn(false)
                const appColumnSize = document.querySelector('.app')
                appColumnSize.style.cssText = `width: 700px`
            }else{
                setSideColumn(true)
                const appColumnSize = document.querySelector('.app')
                appColumnSize.style.cssText = `max-width: 536px`
            }
        //   window.innerWidth < 1024 ? setSideColumn(false) : setSideColumn(true)
        })
      }, [])
        
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newData = {name, description, file}
        setData([...data, newData])
        console.log(data)
        return data
    }

    const onChange = (checked) => {
        console.log(`switch to ${checked}`)
        if(checked) {
            const light = document.querySelector('.side-bar')
            light.style.cssText = `
                background: rgba(220, 211, 211, 0.312);
                color: black;
            `
        
        }else{
            const dark = document.querySelector('.side-bar')
            dark.style.cssText = `
                background: #25313e;
                color: white;
            `
        }
    }      
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const onScrollToElement = () => {
        const element = document.getElementById('scrollToAboutUs');
        element.scrollIntoView({block: "start", behavior: "smooth"})
    }            
        return (
            <Container>
                <Row>
                    {sideColumn && (<Col xs={3} className='side-bar'>
                        <div className='p-sider'>
                            <p style={{float: 'left'}}>Dark</p>
                            <Switch defaultChecked onChange={onChange}
                                style={{width: '20px',
                                    position: 'relative', 
                                    left: '10px',
                                    bottom: '3px'
                                }}/>
                            <p style={{float: 'right'}}>Light</p>
                        </div>
                        <Accordion className='accordion' defaultActiveKey="1" alwaysOpen flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header >Список участников</Accordion.Header>
                                <Accordion.Body className='accordion-header'>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Avatar className='avatar-styles' src={require("../../images/Thayorn.jpg")} style={{marginRight: '20px'}} />
                                            Тайорн
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar className='avatar-styles' src={require("../../images/Less.jpg")} style={{marginRight: '20px'}}/>
                                            Лэс
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar className='avatar-styles' src={require("../../images/Kven.jpg")} style={{marginRight: '20px'}}/>
                                            Квен
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar className='avatar-styles' src={require("../../images/Melonblast.jpg")} style={{marginRight: '20px'}}/>
                                            Мелонбласт
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar className='avatar-styles' src={require("../../images/Stuffing.jpg")} style={{marginRight: '20px'}}/>
                                            Стаффинг
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Avatar className='avatar-styles' src={require("../../images/Nick.png")} style={{marginRight: '20px'}}/>
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
                                            <Upload.Dragger {...props}>Перетащи в поле или нажми
                                                <Button className='button-sider'
                                                    icon={<UploadOutlined />} 
                                                    style={{marginBottom: '15px',
                                                            borderRadius: '0%'}}
                                                    variant="warning">Выбрать портрет
                                                </Button>
                                            </Upload.Dragger>

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
                                            </Button>
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
                                            <Upload.Dragger {...props}>Перетащи в поле или нажми
                                                <Button className='button-sider'
                                                    icon={<UploadOutlined />} 
                                                    style={{marginBottom: '15px'}}
                                                    variant="warning">Выбрать скриншот
                                                </Button>
                                            </Upload.Dragger>
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
                    </Col>)}
                    <Col xs={7}>
                        <div className='app'>
                            <AppHeader onScrollToElement={onScrollToElement}/>
                            <CarouselPartisipants data={data} setData={setData}/>
                            <AboutUs />
                            <CarouselScreenshots 
                                name={name} 
                                description={description}
                                />
                            <AppFooter scrollUp={scrollUp}/>
                            <BackToTopButton/>
                        </div>
                    </Col>
                    {sideColumn &&(<Col className='chat'>ЧАТ УЧАСТНИКОВ</Col>)}
                </Row>
            </Container>
        )
    }
// }

export default App;