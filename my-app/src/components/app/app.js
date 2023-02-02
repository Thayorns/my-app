import React, {useEffect, useState} from 'react'
import AppHeader from '../app-header/app-header';
import AboutUs from '../about-us/about-us';
import AppFooter from '../app-footer/app-footer';
// import Modal from '../modal/modal';
import CarouselPartisipants from '../carousel-partisipants/carousel-partisipants';
import CarouselScreenshots from '../carousel-screenshots/carousel-screenshots';
import BackToTopButton from '../backToTopButton/backToTopButton'
// import AddForm from '../add-form/add-form'

import './app.css';





const App = () => {

    const [menuActive, setMenuActive] = useState(false)
    const [chatActive, setChatActive] = useState(false)

    const [userName, setUserName] = useState('')
    const [description, setDescription] = useState('')
    const [imagePreviewUrl, setImagePreviewUrl] = useState()   
    
    const [data, setData] = useState([
        // вынести id на верхний уровень каждого вложенного обьекта
        {
            id: 1,
            userName: 'Тайорн',
            description: 'Из грязи - в элема',
            file: require("../../images/thayornShaman2.jpg")            
        },
        {
            id: 2,
            userName: 'Лэс',
            description: 'Открытый любовник Сильваны Ветрокрылой. Любовь к квестам, лору и коллективной игре.',
            file:  require("../../images/Les.jpg")            
        },
        {
            id: 3,
            userName: 'Квен',
            description: 'Под его крыльями боссы в ключах ложаться сами собой. Любит играть в прятки за "камнем"',
            file: require("../../images/Pavel2.jpg")            
        },
        {
            id: 4,
            userName: 'Мелонбласт',
            description: 'Батя. Гладиатор. Любимец публики и Великий Оратор',
            file: require("../../images/Melonblast.jpg")            
        },
        {
            id: 5,
            userName: 'Шкотофка',
            description: 'Защитник стойл на Арати. Любит танцевать под луной',
            file: require("../../images/Nick.png")       
        },
        {
            id: 6,
            userName: 'Стаффинг',
            description: 'Гладиатор. Гайд на прот-вара за душой. БЕЗУМНО любит свою Ульяночку',
            file: require("../../images/Stuffing.jpg")
        },
    ])


    const deleteParticipant = (id) => {
        let newArr = [...data].filter(item => item.id !== id)
        setData(newArr)//*исправить чтоб итератор отнимал единицу после удаления крайнего
    }

    // const onValueChange = (e) => {
    //     setUserName({
    //         [e.target.name]: e.target.value
    //     })
    // }    
    
    const handleSubmit = (e) => {
        e.preventDefault()        
        const newData = {userName, description, imagePreviewUrl}
        setData([...data, newData])
        console.log(data)
        return data
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const onScrollToElement = () => {
        const element = document.getElementById('scrollToAboutUs');
        element.scrollIntoView({block: "start", behavior: "smooth"})
    }            
    return (                   
                            
        <div className='app'>
            <AppHeader onScrollToElement={onScrollToElement}
                active={menuActive} setActive={setMenuActive}
                chatActive={chatActive} setChatActive={setChatActive}
                data={data} setData={setData}
            />
            <CarouselPartisipants data={data} 
                setData={setData} 
                deleteParticipant={deleteParticipant}
                handleSubmit={handleSubmit} 
                userName={userName}
                setUserName={setUserName}
                description={description}
                setDescription={setDescription}
                // handleImageChange={handleImageChange}
                imagePreviewUrl={imagePreviewUrl}
                setImagePreviewUrl={setImagePreviewUrl}
                // index={index}
                // setIndex={setIndex}
                />
            <AboutUs />
            <CarouselScreenshots 
                userName={userName}
                setUserName={setUserName}
                description={description}
                imagePreviewUrl={imagePreviewUrl}
                setImagePreviewUrl={setImagePreviewUrl}
                />
            <AppFooter scrollUp={scrollUp}>
                <BackToTopButton/>
            </AppFooter>
        </div>                
    )
}
export default App;