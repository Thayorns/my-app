import React from 'react'
import { Button} from 'antd'
import {MenuOutlined, CommentOutlined} from '@ant-design/icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import './app-header.css'


const AppHeader = ({onScrollToElement}) => {        
    
    return (   
         
        <div className='app-header' id='scrollToHeader'> 
            <nav className='navigation' 
                style={{maxWidth: '1000px',width: '100%', zIndex: '99', position: 'fixed', top: '0',
                    background: 'grey', height: '50px'}}
            >
                <MenuOutlined style={{float: 'left', 
                    padding: '5px 0px 0px 10px', 
                    cursor: 'pointer', 
                    margin: '0px auto',
                    color: 'white'
                    }}/>
                <CommentOutlined style={{float: 'right',
                    padding: '5px 10px 0px 0px', 
                    cursor: 'pointer', 
                    margin: '0px auto',
                    color: 'white'
                    }}/>
            </nav>                        
            <h1 className='h1-header' tabIndex={0}>Шакалы Азерота</h1>
            <img src={require('../../images/logo.jpg')}
                className='logo-header'
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
    
    )
}


export default AppHeader