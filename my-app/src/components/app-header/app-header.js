import React from 'react'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './app-header.css'


const AppHeader = ({onScrollToElement}) => {        
    return (

        <div>            
            <div className='app-header' id='scrollToHeader'>                
                <h1 className='h1-header' tabIndex={0}>Шакалы Азерота</h1>
                <img src={require('../../images/logo.jpg')}
                    className='logo'
                    alt='jakal is roaring' 
                    height={150}
                    width={150}
                    tabIndex={0}
                />
                <p className='p-header' tabIndex={0}>
                    Мы - группа друзей, играем в World of Warcraft со времён дополнения 'Battle for Azeroth'.
                </p>
                
                <Button className='button-header'
                    variant='secondary'
                    // size='lg'

                    tabIndex={0}
                    onClick={onScrollToElement}>О нас
                </Button>{''}
            </div>
        </div>
    )
}


export default AppHeader