import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import {UploadOutlined} from '@ant-design/icons'


import './burger.css'


const Burger = ({active, handleClose}) => {


    return (
        <div className={active ? 'burger-menu active' : 'burger-menu'}>
            <Offcanvas show={active} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu in progress..</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        {/* <h3 className='h3-carousel'
                            tabIndex='0'>Добавить участника
                        </h3>
                        <form action="http://localhost:3000/"
                            onClick={e => e.stopPropagation()}>
                            
                            <Dragger  style={{padding: '16px 12px', 
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
                        </form> */}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default Burger