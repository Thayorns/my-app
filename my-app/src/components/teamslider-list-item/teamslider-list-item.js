// import {Component} from 'react'

import './team-slider-list-item.scss'

const TeamSliderListItem = (props) => {
    const {name, description,file} = props
    return (

        <div className='slider-item'>
            <img className='participants-portraits' 
                alt='participants ingame portraits'
                src={file}
                tabIndex='0'
                height={300} 
                width={300}/>   
            <button className='slider-dots'
                tabIndex='0'
                aria-label='slider page dots'>
            </button>
            <h4 tabIndex='0'>{name}</h4>
            <p>{description}</p>               
        </div>
    )
}


export default TeamSliderListItem