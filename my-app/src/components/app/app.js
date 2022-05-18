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
            data: []
            
        }
    }

    handleOpenModal = () => {
        this.setState({active: !this.state.active})
        document.body.style.overflow = 'hidden';
        if(this.state.active){
            document.body.style.overflow = 'visible';
        }
    }

    addParticipant = (name, description, file, imagePreviewUrl) => {
        const newParticipant = {name, description, file, imagePreviewUrl}
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
                    addParticipant={this.addParticipant}
                    />
                <TeamSliderList data={data}/>
                <AboutUs handleOpenModal={this.handleOpenModal}/>
                <ImgCarousel/>
                <AppFooter/>
            </div>
        )
    }
}

export default App;