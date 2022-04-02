import {Component} from 'react'

import './app-header.scss'


class AppHeader extends Component {
    
    
    render() {
        const onScrollToElement = () => {
            const element = document.getElementById('scrollToAboutUs');
            element.scrollIntoView({block: "start", behavior: "smooth"})
        }
        
        return (
        <div>            
            <div className='app-header' id='scrollToHeader'>                
                <h1 tabIndex={0}>Шакалы Азерота</h1>
                <img className='logo'
                    alt='jakal is roaring' 
                    height={100} 
                    width={100}
                    tabIndex={0}>
                </img>
                <p tabIndex={0}>Мы - группа друзей, играем в World of Warcraft со времён дополнения 'Battle for Azeroth'.</p>
                <button tabIndex={0}
                    onClick={onScrollToElement}>о нас</button>
            </div>
        </div>
        )
    }
}

export default AppHeader