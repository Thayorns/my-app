import { useState } from 'react'
import TeamSliderListItem from '../teamslider-list-item/teamslider-list-item'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './team-slider-list.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const PAGE_WIDTH = 300

const TeamSliderList = ({data}) => {
        
    // const [offset, setOffset] = useState(0)
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };       
            
    return (
        <div className='team-slider'>
            <h3 tabIndex='0'>Участников: {data.length}</h3>
            
            <Carousel activeIndex={index} 
                onSelect={handleSelect} 
                className='slides-wrapper'>
                
                    {/* <div className="slider-wrapper"> */}
                        <div className='slider-inner'
                            // style={{transform: `translateX(${offset}px)`}}
                            >
                            {data.map(item => {
                                const {id, ...itemProps} = item
                                return (
                                    <TeamSliderListItem key = {id} {...itemProps}/>
                                )
                            })}
                        </div>
                    {/* </div> */}
                
            </Carousel>
        </div>
    )
}



    
     


export default TeamSliderList