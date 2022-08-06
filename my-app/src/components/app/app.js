import React, {Component} from 'react'
import AppHeader from '../app-header/app-header';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';
import Modal from '../modal/modal';
import CarouselPartisipants from '../carousel-partisipants/carousel-partisipants';
import CarouselScreenshots from '../carousel-screenshots/carousel-screenshots';
import BackToTopButton from '../backToTopButton/backToTopButton'

import './app.css'



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
        )
    }
}

export default App;