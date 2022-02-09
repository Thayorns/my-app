import './team-slider.scss'

const TeamSlider = () => {
    return (
        <div className='team-slider'>
            <h3 tabIndex='0'>Участники: </h3>
            <div tabIndex='0' aria-label='slider block'>    
                <button className='left-arrow'
                    tabIndex='0'
                    aria-label='left arrow'>                    
                </button>               
                <img className='participants-portraits' 
                    alt='participants ingame portraits'
                    tabIndex='0'
                    height={350} 
                    width={600}>
                </img>               
                <button className='right-arrow'
                    tabIndex='0'
                    aria-label='right arrow'>                    
                </button>               
            </div>
            <button className='slider-dots'
                tabIndex='0'
                aria-label='slider dots'>                    
            </button>
            <h4 tabIndex='0'>Участник</h4>
            <span tabIndex='0'>Краткое описание участника</span>
        </div>
    )
}

export default TeamSlider