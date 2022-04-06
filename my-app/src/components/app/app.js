import {Component} from 'react'

import AppHeader from '../app-header/app-header';
import TeamSlider from '../team-slider/team-slider';
import ImgCarousel from '../img-carousel/img-carousel';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';


import './app.scss'
import Modal from '../modal/modal';

class App extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }        
    }

    // handleOpenModal = (active) => {
    //     if (active === false) {
    //         this.setState({active: !false})
    //     }else{
    //         this.setState({active: false})
    //     }
    // }
    handleOpenModal = () => {
        this.setState({active: !this.state.active})
        }

    render() {
        const {active} = this.state

        return (
            <div className='app'>            
                <AppHeader />
                <TeamSlider />
                <AboutUs handleOpenModal={this.handleOpenModal}/>
                <ImgCarousel/>
                <AppFooter/>
                <Modal active={active}
                    handleOpenModal={this.handleOpenModal}/>                
            </div>
    );
    }
}

export default App;