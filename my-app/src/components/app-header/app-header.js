import React from 'react'
import { Button} from 'antd'
import {MenuOutlined, CommentOutlined} from '@ant-design/icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import './app-header.css'


const AppHeader = ({onScrollToElement}) => {        
    
    return (   
         
        <div className='app-header' id='scrollToHeader'> 
            <nav className='navigation' 
                style={{width: '100%'}}
            >
                <MenuOutlined style={{float: 'left', 
                    paddingLeft: '15px', 
                    cursor: 'pointer', 
                    margin: '0px auto'
                    }}/>
                <CommentOutlined style={{float: 'right',
                    paddingRight: '15px', 
                    cursor: 'pointer', 
                    margin: '0px auto'
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