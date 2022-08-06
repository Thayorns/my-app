import { Component } from 'react'
import React from 'react';
import './modal.css'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: ''
        }
    }    
   
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.name.length < 1 || !this.state.description) return;
        this.props.addParticipant(this.state.name, this.state.description, this.state.imagePreviewUrl )
        this.setState({
            name: '',
            description: ''
        })
    }
    handleImageChange = (e) => {
        e.preventDefault()
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(file)
    }

    
    render() {
        const {name, description} = this.state

        const {active,handleOpenModal} = this.props


        let {imagePreviewUrl} = this.state        
        let imagePreview;
            if (imagePreviewUrl) {
               imagePreview = (<img src={imagePreviewUrl} alt='ingame portrait'/>)
            }else{
                imagePreview = (<div className="previewText"></div>)
            }


        return (
            <div className={active ? 'modal active' : 'modal'} 
                onClick={handleOpenModal}
                aria-hidden="true">
                
                <form action='#'
                    onSubmit={this.handleSubmit}
                    method='post' 
                    encType='multipart/form-data' 
                    className='modalContent' 
                    onClick={e => e.stopPropagation()}
                    tabIndex={0}>

                    <div>
                        <div className='imageGetInput'>
                            {imagePreview}
                        </div>
                        <input className='fileInput'
                            tabIndex={0}
                            type='file'
                            onChange={this.handleImageChange}>
                        </input>
                    </div>
                    
                    
                    <input required placeholder="name" 
                        name="name"
                        value={name}
                        type="text" 
                        class="modal__input"
                        tabIndex={0}
                        onChange={this.onValueChange}/>
                    <input required placeholder="description" 
                        name='description'
                        value={description}
                        type="text" 
                        class="modal__input"
                        tabIndex={0}
                        onChange={this.onValueChange}/> 
                    
                    <button className='submitButton'
                        type="submit"
                        tabIndex={0}
                        onClick={handleOpenModal}>отправить
                    </button>
                </form>
            </div>
        
        )
    }
}

export default Modal