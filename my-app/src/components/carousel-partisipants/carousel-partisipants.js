import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel-partisipants.css'

const CarouselPartisipants = ({data}) => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className='team-slider'>
            <h3 className='h3-carousel'
                tabIndex='0'>Участников: 6</h3>
            <Carousel activeIndex={index} 
                onSelect={handleSelect}
                className='carousel-wrapper'
                >
            
                <Carousel.Item className='carousel-item'>
                    <img className="d-block w-100"
                        src={require("../../images/Thayorn.jpg")}
                        alt="First slide"
                        style={{height: '520px',
                            borderRadius: '4px'}}/>                    
                    <Carousel.Caption>
                        <h3>Тайорн</h3>
                        <p>Шериф из зулдазара, ни гроша за душой.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../images/Less.jpg")}
                        alt="Second slide"
                        style={{height: '520px',
                            borderRadius: '4px'}}
                    />

                    <Carousel.Caption>
                        <h3>Лэс</h3>
                        <p>Открытый любовник Сильваны Ветрокрылой.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../images/Kven.jpg")}
                        alt="Third slide"
                        style={{height: '520px',
                            borderRadius: '4px'}}
                    />

                    <Carousel.Caption>
                        <h3>Квен</h3>
                        <p>Паладин-исключение из правил о паладинах. Убивает ластов в ключах соло.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousel-item'>
                    <img className="d-block w-100"
                        src={require("../../images/Melonblast.jpg")}
                        alt="First slide"
                        style={{height: '520px',
                            borderRadius: '4px'}}/>                    
                    <Carousel.Caption>
                        <h3>Мелонбласт</h3>
                        <p>Батя. Гладиатор. Любимец публики и Великий Оратор</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousel-item'>
                    <img className="d-block w-100"
                        src={require("../../images/Nick.png")}
                        alt="First slide"
                        style={{height: '520px',
                            borderRadius: '4px'}}/>                    
                    <Carousel.Caption>
                        <h3>Шкотофка</h3>
                        <p>Защитник стойл при битве на Арати. Любит танцевать под луной</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousel-item'>
                    <img className="d-block w-100"
                        src={require("../../images/Stuffing.jpg")}
                        alt="First slide"
                        style={{height: '520px',
                            borderRadius: '4px'}}/>                    
                    <Carousel.Caption>
                        <h3>Стаффинг</h3>
                        <p>Гладиатор. Гайд на прот-вара за душой</p>
                    </Carousel.Caption>
                </Carousel.Item>
        
            </Carousel>
        </div>
    )
}
export default CarouselPartisipants