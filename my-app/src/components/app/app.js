import {useState} from 'react'

import AppHeader from '../app-header/app-header';
import TeamSlider from '../team-slider/team-slider';
import ImgCarousel from '../img-carousel/img-carousel';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';


import './app.scss'
import Modal from '../modal/modal';

const App = () => {    
    
    // создаём состояние,отвечающее за видимость окна = useState(делаем окно видимым)
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className='app'>
            <main>
                <AppHeader />
                <TeamSlider />
                <AboutUs setModalActive={setModalActive}/>
                <ImgCarousel/>
                <AppFooter/>
            </main>
            <Modal active={modalActive} setActive={setModalActive}/>   
            
        </div>
    );
}



export default App;