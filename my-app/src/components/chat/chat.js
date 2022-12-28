import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import './chat.css'


const Chat = ({chatActive, handleClose}) => {
    return (
        <div className={chatActive ? 'chat-menu active' : 'chat-menu'}>
            <Offcanvas show={chatActive} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Здесь будет чат, Алчонок.</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Как ты поняла, моя сладенькая, здесь можно общаться..
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default Chat