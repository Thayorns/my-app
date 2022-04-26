import {Component} from 'react'

import AppHeader from '../app-header/app-header';
import TeamSlider from '../team-slider/team-slider';
import ImgCarousel from '../img-carousel/img-carousel';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';
import Modal from '../modal/modal';

import './app.scss'

class App extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            // data: [
            //     {name: 'Тайорн', description: 'шериф из Зулдазара.Ни гроша за душой'}
            // ]
        }        
    }

    handleOpenModal = () => {        
        this.setState({active: !this.state.active})
        document.body.style.overflow = 'hidden';
        if(this.state.active){
            document.body.style.overflow = 'visible';
        }
    }

    addParticipant = (name,description) => {
        const newParticipant = {
            name,
            description
        }
        this.setState(({data}) => {
            const newArr = [...data, newParticipant]
            return {
                data: newArr
            }
        })
    }
    

    render() {
        const {active} = this.state

        return (
            <div className='app'>            
                <AppHeader />
                <TeamSlider/>
                <AboutUs handleOpenModal={this.handleOpenModal}/>
                <ImgCarousel/>
                <AppFooter/>
                <Modal active={active}
                    handleOpenModal={this.handleOpenModal}
                    addParticipant={this.addParticipant}/>                
            </div>
    );
    }
}

export default App;