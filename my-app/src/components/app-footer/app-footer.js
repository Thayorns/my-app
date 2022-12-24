import React, { useEffect, useState } from 'react';
import {Button, Dropdown, Menu} from 'antd';
import BackToTopButton from '../backToTopButton/backToTopButton';
import './app-footer.css'

const AppFooter = () => {

    const [contactsActive, setContactsActive] = useState(true),
          [contactButtonActive, setContactButtonActive] = useState(false)
    
        useEffect (() => {
          window.addEventListener('resize', () => {
            window.innerWidth < 1024 ? setContactButtonActive(true) : setContactButtonActive(false)
          })
        }, [])

        useEffect (() => {
          window.addEventListener('resize', () => {
            window.innerWidth < 1024 ? setContactsActive(false) : setContactsActive(true)
          })
        }, [])

  // dropdown - в ant design
    const menu = (
        <Menu
          items={[
            {
              label:  <a href="https://discord.com/channels/981977520951918623/981977520951918625"
                          target="_blank"
                          rel="noopener noreferrer">
                          <img src={require('../../images/discord.png')}
                            alt='discord link'
                            className='discord-link'
                            height={150}
                            width={150}
                            tabIndex={0}/>
                      </a>,
              key: '0',
            },
            {
              label:  <a href='https://github.com/Thayorns'
                        target='_blank'
                        rel="noopener noreferrer">
                            <img src={require('../../images/GitHub.png')}
                                alt='github link'
                                className='github-link'
                                height={150}
                                width={150}
                                tabIndex={0}
                            />
                      </a>,
              key: '1',
            },
            {
              label:  <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
                        target='_blank'
                        rel="noopener noreferrer">                    
                            <img src={require('../../images/Instagram.png')}
                                alt='github link'
                                className='instagram-link'
                                height={150}
                                width={150}
                                tabIndex={0}
                            />
                      </a>,
              key: '3',
            },
          ]}
        />
      )
    
    return (
        <div className='app-footer'>
          <BackToTopButton/>
          {contactButtonActive && (
              <Dropdown overlay={menu} placement="topLeft" className='a-contacts'>
                <Button  className='a-contacts'>Контакты</Button>
              </Dropdown>
          )}
          {contactsActive && (
            <div className='contactsActive'>
              <a href='https://discord.com/channels/981977520951918623/981977520951918625'
                  target="_blank"
                  rel="noopener noreferrer">
                      <img src={require('../../images/discord.png')}
                          alt='discord link'
                          className='discord-link'
                          height={150}
                          width={150}
                          tabIndex={0}
                      />
              </a>
              <a href='https://github.com/Thayorns'
                  target='_blank'
                  rel="noopener noreferrer">
                      <img src={require('../../images/GitHub.png')}
                          alt='github link'
                          className='github-link'
                          height={150}
                          width={150}
                          tabIndex={0}
                        
                      />
              </a>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
                  target='_blank'
                  rel="noopener noreferrer">                    
                      <img src={require('../../images/Instagram.png')}
                          alt='github link'
                          className='instagram-link'
                          height={150}
                          width={150}
                          tabIndex={0}
                      />
              </a>
            </div>)}  
            
        </div>
    )
}

export default AppFooter