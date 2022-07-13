import { useState } from 'react'
import TeamSliderListItem from '../teamslider-list-item/teamslider-list-item'
// import {Component} from 'react'

import './team-slider-list.scss'
const PAGE_WIDTH = 300
const TeamSliderList = ({data}) => {
    
    const [offset, setOffset] = useState(0)
        
        const handleRightArrowClick = () => {
            // console.log('handleRightToggle')
            setOffset((currentOffset) => {
                const newOffset = currentOffset - PAGE_WIDTH
                console.log(newOffset)
                return newOffset
            })
        }  
        const handleLeftArrowClick = () => {
            // console.log('handleLeftToggle')
            setOffset((currentOffset) => {
                const newOffset = currentOffset + PAGE_WIDTH
                console.log(newOffset)
                return newOffset
            })
        }    
            return (
                <div className='team-slider'>
                    <h3 tabIndex='0'>Участников: {data.length}</h3>
                    
                    <div className='slides-wrapper' tabIndex='0' aria-label='slider-wrapper'>
                        <button className='previous-button'
                            tabIndex='0'
                            aria-label='previous image-button'
                            onClick={handleLeftArrowClick}>
                        </button>
                            <div className="slider-wrapper">
                                <div className='slider-inner'
                                    style={{transform: `translateX(${offset}px)`}}>
                                    {data.map(item => {
                                        const {id, ...itemProps} = item
                                        return (
                                            <TeamSliderListItem 
                                                key = {id} 
                                                {...itemProps}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        <button className='next-button'
                            tabIndex='0'
                            aria-label='next image-button'
                            onClick={handleRightArrowClick}>
                        </button>
                    </div>
                </div>
            )
    }


    
     


export default TeamSliderList