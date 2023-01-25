import React, { useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import { message, Upload}  from 'antd'

// import 'bootstrap/dist/css/bootstrap.min.css';
import {UploadOutlined, DeleteOutlined} from '@ant-design/icons'
import './carousel-partisipants.css'

// const propDragger = {
//     name: 'file',
//     multiple: false,
//     action: 'http://localhost:3000/',
//     onChange(info) {
//       const { status } = info.file
//       if (status !== 'uploading') {
//         console.log(info.file, info.fileList)
//       }
//       if (status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully.`)
//       } else if (status === 'error') {
//         message.error(`${info.file.name} file upload failed.`)
//       }
//     },
//     onDrop(e) {
//       console.log('Dropped files', e.dataTransfer.files)
//     }
// }

const CarouselPartisipants = (props) => {
    
    const {data,imagePreviewUrl, setImagePreviewUrl, deleteParticipant, 
        handleSubmit, userName, description, 
        setUserName, setDescription} = props
    // const {Dragger} = Upload
    
    const [index, setIndex] = useState(0)    
    
    
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
    
    const handleImageChange = (e) => {
        e.preventDefault()
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
        console.log(file);
        console.log(reader);
    }
    
    let imagePreview;
    if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} alt='ingame portrait' style={{height: '100px',
        width: '100px'}}/>)

    }else{
        imagePreview = (<div className="previewText"></div>)
    }
  
    return (
        <div className='team-slider'>
            
            <div className='form-container'>
                <h3 className='h3-carousel'
                    tabIndex='0'>Участников: {data.length}
                </h3>
                <form  action='http://localhost:3000/'
                    onClick={e => e.stopPropagation()}
                    method='post'
                    encType='multipart/form-data'
                    onSubmit={handleSubmit}
                >
                    <div>
                        <input  
                            // style={{padding: '16px 12px'}}
                            type='file'
                            onChange={handleImageChange}
                            // {...propDragger}
                            // beforeUpload={() => true}
                            // onChange={(e)=> setFile(e.target.files[0])}
                            // value={file}
                            >               
                        </input>
                        <div className='imagePreview'
                            style={{height: '100px',
                                width: '100px'}}>
                            {imagePreview}
                        </div>  
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Имя"
                        className="mb-3"
                        style={{marginTop: '16px'}}
                    >
                        <Form.Control type="text"
                            value={userName}
                            placeholder="игровой ник" 
                            style={{borderRadius: '0%'}}
                            onChange={(e)=> setUserName(e.target.value)}
                            name='userName'
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="описание">
                        <Form.Control type="text"
                            value={description}
                            placeholder="немного о себе" 
                            style={{borderRadius: '0%'}}
                            onChange={(e)=> setDescription(e.target.value)}
                            name='description' />
                    </FloatingLabel>
                    <Button className='submit-button' 
                        variant="outline-primary" 
                        type="submit">
                        Добавить
                    </Button>
                </form>
            </div>
            
            <div className='carousel-container'>
                <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-wrapper' fade>
                    {data.map(item => (
                        <Carousel.Item className='carousel-item' key={item.userName}>
                            
                            <img className="d-block w-100"
                                // src={item.img}
                                src={item.file}
                                alt={item.alt}
                                style={{height: '482px',marginTop: '15px'}}
                            />                            
                            <Carousel.Caption>
                                <h3>{item.userName}
                                    <DeleteOutlined className='button-delete-person'
                                        style={{float: 'right'}}
                                        onClick={() => deleteParticipant(item.id)}>Удалить
                                    </DeleteOutlined>
                                </h3>
                                <p>{item.description}</p>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
export default CarouselPartisipants