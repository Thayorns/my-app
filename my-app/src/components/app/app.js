// import {Component} from 'react'

import AppHeader from '../app-header/app-header';
import TeamSlider from '../team-slider/team-slider';
import ImgCarousel from '../img-carousel/img-carousel';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';


import './app.scss'
import Modal from '../modal/modal';

const App = ({setModalActive}) => {    
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
                {/* передаю ниже в AboutUs функцию "вкл" */}
                <AboutUs setModalActive={setModalActive}/>
                <ImgCarousel/>
                <AppFooter/>
                {/* передаю функцию "вкл" как проперти модалки */}
                <Modal setModalActive={setModalActive}/>                
            </div>
    );
       
}


    



export default App;