import React from 'react';
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import './about-us.css'


const AboutUs = ({handleOpenModal}) => {
    
    
    return (
        <div className='about-us' id='scrollToAboutUs'>
            <h3 className='h3-about-us' tabIndex={0}>О нас</h3>
            <p className='p-about-us' tabIndex={0}>Вождь орды прозвал нашу команду "шакалами" за нашу беспринципность.
            Будь то группа соратников или одиночка, волею судьбы забредшие на нашу территорию, выход
            один - смерть. Вступай в наши ряды и гарантированно получи напарников для арены, полей боя,
            пвп в открытом мире и эпохальных ключей!</p>
            <Button className='button-about-us'
                variant='secondary'
                onClick={handleOpenModal} 
                tabIndex={0}>
                    Вступить в команду
            </Button>
        </div>
    )
}

export default AboutUs