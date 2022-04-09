import './img-carousel.scss'

const ImgCarousel = () => {//should be constructor slider&carousel
    return (
        <div>
             <div className='team-slider'>
            <h3 tabIndex='0'>Скриншоты от участников: </h3>
            <div className='slider-block'
                tabIndex='0' 
                aria-label='slider block'>    
                <button className='previous-button'
                    tabIndex='0'
                    aria-label='previous image-button'>                    
                </button>               
                <img className='ingame-screenshots' 
                    alt='ingame screenshots'
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
            <h4 tabIndex='0'>Ссылка на участника</h4>
            <p tabIndex='0'>Краткое описание скриншота</p>
        </div>   
        </div>
    )
}

export default ImgCarousel