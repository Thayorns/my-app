import React from 'react';
import './team-slider-list-item.css'

const TeamSliderListItem = (props) => {
    const {name, description,file} = props
    return (

        <div className='slider-item'>
            <img className='participants-portraits'
                src={file}
                alt='participants ingame portraits'
                aria-label='participants-portraits'
                tabIndex='0'
                height={300} 
                width={300}
            />
            <h4 tabIndex='0'>{name}</h4>
            <p>{description}</p>
        </div>
    )
}


export default TeamSliderListItem