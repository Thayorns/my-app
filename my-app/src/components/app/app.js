import {Component} from 'react'

import AppHeader from '../app-header/app-header';
import TeamSlider from '../team-slider/team-slider';
import ImgCarousel from '../img-carousel/img-carousel';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';


import './app.scss'

class App extends Component {    
    

    
    render() {
        return (
            <div className='app'>
                <AppHeader />
                <TeamSlider/>
                <AboutUs/>
                <ImgCarousel/>
                <AppFooter/>     
                
            </div>
        );
    }
}



export default App;