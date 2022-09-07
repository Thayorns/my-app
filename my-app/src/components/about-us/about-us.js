import React from 'react';
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import './about-us.css'


const AboutUs = ({handleOpenModal}) => {
    
    
    return (
        <div className='about-us' id='scrollToAboutUs'>
            <h3 className='h3-about-us' tabIndex={0}>О нас</h3>
            <hr style={{borderColor: "black", width: '250px'}}/>
            <p className='p-about-us' tabIndex={0}
                style={{textAlign: "justify"}}>Вождь орды прозвал нашу команду <em>'шакалами'</em> за нашу беспринципность.
            Будь то группа соратников или одиночка, волею судьбы забредшие на нашу территорию, выход
            один - <strong>смерть</strong>. Вступай в наши ряды и гарантированно получи напарников для <s>любви,</s> арены, полей боя,
            пвп в открытом мире и эпохальных ключей!</p>
            <hr style={{borderColor: "black", width: '250px'}}></hr>
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