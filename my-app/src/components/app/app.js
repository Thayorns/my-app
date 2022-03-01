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
            data: [
                {name: 'Тайорн', description: 'С этим элемом совсем забыл про вара..И к лучшему.', id: 1},
                {name: 'Лэс', description: 'Всё ещё надеется на благодушие Сильваны', id: 2}

            ]
        }
    }

    
    render() {
        return (
            <div className='app'>
                <AppHeader />
                <TeamSlider />
                <AboutUs/>
                <ImgCarousel/>
                <AppFooter/>
                <Modal/>   
                
            </div>
        );
    }
}



export default App;