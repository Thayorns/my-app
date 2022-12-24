import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import './burger.css'


const Burger = ({active, handleClose}) => {
    return (
        <div className={active ? 'burger-menu active' : 'burger-menu'}>
            <Offcanvas show={active} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Здесь будет форма, Алчонок.</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Как ты поняла, моя сладенькая, здесь можно добавить персонажа или скриншот..
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default Burger