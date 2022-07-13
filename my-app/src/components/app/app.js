import {Component} from 'react'

import AppHeader from '../app-header/app-header';
import ImgCarousel from '../img-carousel/img-carousel';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';
import Modal from '../modal/modal';
import TeamSliderList from '../team-slider-list/team-slider-list';

import './app.scss'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            data: [
                {
                    id: 1,
                    name: 'Лэс',
                    description: 'Тайный любовник падшей Сильваны Ветрокрылой'
                },
                {
                    id: 2,
                    name: 'Тайорн',
                    description: 'шериф.'
                },
                {
                    id: 3,
                    name: 'Квен',
                    description: 'боссов соло'
                }
            ]
        }
        this.maxId = 3
    }
    // handleSliderToggle = () => {
    //     const
    //         slides = document.querySelectorAll('.slider-item'),            
    //         slidesField = document.querySelector('.slider-inner'),
    //         slidesWrapper = document.querySelector('.slider-wrapper'),
    //         width = window.getComputedStyle(slidesWrapper).width
            
    //     let offset = 0

    //     slidesField.style.transform = `translateX(-${offset}}px)`
    // }




    handleOpenModal = () => {
        this.setState({active: !this.state.active})
        document.body.style.overflow = 'hidden';
        if(this.state.active){
            document.body.style.overflow = 'visible';
        }
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
                <AppHeader />
                <Modal active={active}
                    handleOpenModal={this.handleOpenModal}
                    addParticipant={this.addParticipant}/>
                <TeamSliderList data={data}/>
                <AboutUs handleOpenModal={this.handleOpenModal}/>
                <ImgCarousel/>
                <AppFooter/>
            </div>
        )
    }
}

export default App;