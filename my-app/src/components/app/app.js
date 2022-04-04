// import {Component} from 'react'

import AppHeader from '../app-header/app-header';
import TeamSlider from '../team-slider/team-slider';
import ImgCarousel from '../img-carousel/img-carousel';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';


import './app.scss'
import Modal from '../modal/modal';

const App = () => {    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // modalActive: false
    //     }
    // }
    // setModalActive = () => {
    //     this.setState({modalActive: true})
    // }    
               
        
        
        return (
            <div className='app'>            
                <AppHeader />
                <TeamSlider />
                <AboutUs />
                <ImgCarousel/>
                <AppFooter/>
                <Modal />                
            </div>
    );
       
}


    



export default App;