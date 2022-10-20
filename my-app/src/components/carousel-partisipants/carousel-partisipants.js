import React, { useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'

// import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel-partisipants.css'

const CarouselPartisipants = ({data, setData}) => {
    
    const [index, setIndex] = useState(0)    
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }

    const deleteParticipant = (id) => {
        let newArr = [...data].filter(item => item.id !== id)
        setData(newArr)
    }
  
    return (
        <div className='team-slider'>
            <h3 className='h3-carousel'
                tabIndex='0'>Участников: {data.length}</h3>
            <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-wrapper' fade>
                {
                    data.map( item => (
                        <Carousel.Item className='carousel-item' key={item.name}>
                            <Button className='button-delete-person'
                                style={{borderColor: 'black',
                                    color: 'black',
                                    marginBottom: '15px',
                                    backgroundColor: 'white'}}
                                onClick={() => deleteParticipant(item.id)}>Удалить участника</Button>
                            <img className="d-block w-100"
                                src={item.img}
                                alt={item.alt}
                                style={{height: '482px'}}
                            />                            
                            <Carousel.Caption>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}
export default CarouselPartisipants