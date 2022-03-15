// import {Component} from 'react'

import './team-slider.scss'

const TeamSlider = () => {
    
    return (
        <div className='team-slider'>
            <h3 tabIndex='0'>Участники: </h3>
            <div className='slider-block'
                tabIndex='0' 
                aria-label='slider block'>    
                <button className='previous-button'
                    tabIndex='0'
                    aria-label='previous image-button'>                    
                </button>               
                <img className='participants-portraits' 
                    alt='participants ingame portraits'
                    tabIndex='0'
                    height={300} 
                    width={600}>    
                </img>               
                <button className='next-button'
                    tabIndex='0'
                    aria-label='next image-button'>                    
                </button>               
            </div>
            <button className='slider-dots'
                tabIndex='0'
                aria-label='slider page dots'>                    
            </button>
            <h4 tabIndex='0'>Участник</h4>
            <p tabIndex='0'>Краткое описание участника</p>
        </div>
    )
}


export default TeamSlider