import React, {Component} from 'react'
import AppHeader from '../app-header/app-header';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';
import Modal from '../modal/modal';
import CarouselPartisipants from '../carousel-partisipants/carousel-partisipants';
import CarouselScreenshots from '../carousel-screenshots/carousel-screenshots';
import BackToTopButton from '../backToTopButton/backToTopButton'

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import './app.css'

const { Header, Content, Footer, Sider } = Layout

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            data: [
                // {
                //     id: 1,
                //     name: 'Лэс',
                //     description: 'Открытый любовник падшей Сильваны Ветрокрылой'
                // },
                // {
                //     id: 2,
                //     name: 'Тайорн',
                //     description: 'шериф.'
                // },
                // {
                //     id: 3,
                //     name: 'Квен',
                //     description: 'Добротный паладин, исключение из правил'
                // }
            ],
            
        }
        this.maxId = 2
    }
    scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    onScrollToElement = () => {
        const element = document.getElementById('scrollToAboutUs');
        element.scrollIntoView({block: "start", behavior: "smooth"})
    }

    handleOpenModal = () => {
        this.setState({active: !this.state.active})
        document.body.style.overflow = 'hidden';
        if(this.state.active){
            document.body.style.overflow = 'visible';
        }
    }
    addScreenshot = () => {

    }

    addParticipant = (name, description, file, imagePreviewUrl) => {
        const newParticipant = {
            name, 
            description,
            file, 
            imagePreviewUrl, 
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newParticipant]
            return {
                data: newArr
            }
        })
    }
    

    render() {
        const {active,data} = this.state
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo">
                        <img src={require('../../images/logo.jpg')}
                        className='logo'
                        alt='jakal is roaring' 
                        height={200}
                        width={200}
                        tabIndex={0}
                        />
                    </div>
                    <Menu 
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `nav ${index + 1}`,
                        }),
                        )}
                    />
                </Sider>
                <Layout>
                    <Header
                        className="site-layout-sub-header-background"
                        style={{
                        padding: 0,
                        }}
                    />
                    <Content 
                        style={{
                        margin: '24px 16px 0',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 0,
                                minHeight: 360,
                            }}
                        >
                            <div className='app'>
                                <AppHeader onScrollToElement={this.onScrollToElement}/>
                                <Modal active={active}
                                    handleOpenModal={this.handleOpenModal}
                                    addParticipant={this.addParticipant}/>
                                <CarouselPartisipants data={data}/>
                                <AboutUs handleOpenModal={this.handleOpenModal}/>
                                <CarouselScreenshots/>
                                <AppFooter scrollUp={this.scrollUp}/>
                                <BackToTopButton/>
                            </div>
                        </div>
                    </Content>
                    <Footer
                        style={{
                        textAlign: 'center',
                        }}
                    >
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default App;