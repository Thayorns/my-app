import { Component } from 'react'
import './modal.scss'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {file: '', name: '', description: ''}
            ],
            active: false
        };
    }
    
    handleOpenModal = () => {
        this.setState({active: !false})
    }
    
   
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.name.length < 1 || !this.state.description) return;

    }
    handleImageChange(e) {
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
        const {name, description, active} = this.state
        
                  
        let {imagePreviewUrl} = this.state
        
        let imagePreview;        
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} alt='ingame portrait' />);            
        }else{
            imagePreview = (<div className="previewText"></div>)
        }

        return (
            
            <div className={active ? 'modal active' : 'modal'} 
            onClick={() => this.handleOpenModal()}>

                <div className='modalContent' 
                    onClick={e => e.stopPropagation()}
                    tabIndex={0}>

                    <div>                        
                        <div className='imageGetInput'>
                            {imagePreview}
                        </div>
                        <input className='fileInput'
                            tabIndex={0}
                            type='file'
                            onChange={(e)=>this.handleImageChange(e)}>
                        </input>
                    </div>
                    
                    
                    <input required placeholder="Игровой ник" 
                        name="name"
                        value={name}
                        type="text" 
                        class="modal__input"
                        tabIndex={0}
                        onChange={this.onValueChange}/>
                    <input required placeholder="Немного о себе" 
                        name='description'
                        value={description}
                        type="text" 
                        class="modal__input"
                        tabIndex={0}
                        onChange={this.onValueChange}/> 
                    
                    <button className='submitButton'
                        type="submit"                    
                        tabIndex={0}
                        onSubmit={(e)=>this.handleSubmit(e)}
                        onClick={()=>this.handleOpenModal(!false)}>join</button>              
                </div>
            </div>
        )
    }
        
}

// // 1-й props-видна модалка, 2-й функция изменяющая это состояние    
// const Modal = ({active, setActive}) => {
    
    

//     return (
//         // вешаем обработчик нажатия на затемнённую область
//         <div className={active ? 'modal active' : 'modal'} 
//             onClick={() => setActive(false)}>
//             {/* чтобы не закрывалось при нажатии на контентную часть--onClick={e => e.stopPropagation()}--*/}
//             <div className='modalContent' 
//                 onClick={e => e.stopPropagation()}
//                 tabIndex={0}> 
                
//                 <button tabIndex={0}/>                
                
//                 <input required placeholder="Игровой ник" 
//                     name="name" 
//                     type="text" 
//                     class="modal__input"
//                     tabIndex={0}/>
//                 <input required placeholder="Немного о себе" 
//                     type="text" 
//                     class="modal__input"
//                     tabIndex={0}/> 
                
//                 <button className='submitButton'
//                     type="submit"                    
//                     tabIndex={0}>join</button>              
//             </div>
//         </div>
//     )
// }

export default Modal