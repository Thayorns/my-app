// import {Component} from 'react'

import './team-slider-list-item.scss'

const TeamSliderListItem = (props) => {
    const {name, description,file} = props
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
                    src={file}
                    tabIndex='0'
                    height={300} 
                    width={600}/>   
                               
                <button className='next-button'
                    tabIndex='0'
                    aria-label='next image-button'>
                </button>
            </div>
            <button className='slider-dots'
                tabIndex='0'
                aria-label='slider page dots'>
            </button>
            <h4 tabIndex='0'>{name}</h4>
            <p tabIndex='0'>{description}</p>
        </div>
    )
}


export default TeamSliderListItem