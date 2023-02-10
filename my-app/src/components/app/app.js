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
    const [index, setIndex] = useState(0)
    const [indexScreenshot, setIndexScreenshot] = useState(0)
    const [id, setId] = useState(6)   
    const [screenshotImagePreviewUrl, setScreenshotImagePreviewUrl] = useState()
    const [screenshotName, setScreenshotName] = useState('')
    const [screenshotDescription, setScreenshotDescription] = useState('')
    
    const [data, setData] = useState([
        // вынести id на верхний уровень каждого вложенного обьекта
        {
            id: 1,
            userName: 'Тайорн',
            description: 'Из грязи - в элема',
            file: require("../../images/ThayornShaman.jpg")            
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
    const [dataScreenshots, setDataScreenshots] = useState([
        {
            img: require('../../images/nagrand.jpg'),
            screenshotName: 'Награнд',
            screenshotDescription: 'лучшее место для пикника у обочины',
            id: 1
        },
        {   
            img: require('../../images/team-screenshot.jpg'),
            screenshotName: 'Гробница королей',
            screenshotDescription: '15-й эпохальный ключ в тайм',
            id: 2
        }
    ])

    const deleteParticipant = (id) => {
        let newArr = [...data].filter(item => item.id !== id)
        setData(newArr)
    }
    const deleteScreenshot = (id) => {
        let newArr = [...dataScreenshots].filter(item => item.id !== id)
        setDataScreenshots(newArr)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()        
        const newData = {userName, description, imagePreviewUrl}
        newData.file = imagePreviewUrl
        // newData.id = id
        setData([...data, newData])
        setIndex(data.length)
        console.log(data)
        setImagePreviewUrl()        
        return data
    }
    const handleScreenshotSubmit = (e) => {
        e.preventDefault()        
        const newData = {screenshotName, screenshotDescription, screenshotImagePreviewUrl}
        newData.img = screenshotImagePreviewUrl
        // newData.id = id
        setDataScreenshots([...dataScreenshots, newData])
        setIndexScreenshot(dataScreenshots.length)
        console.log(dataScreenshots)
        setScreenshotImagePreviewUrl()        
        return dataScreenshots
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
                imagePreviewUrl={imagePreviewUrl}
                setImagePreviewUrl={setImagePreviewUrl}
                index={index}
                setIndex={setIndex}
                // id={id}
                // setId={setId}
                />
            <AboutUs />
            <CarouselScreenshots 
                screenshotName={screenshotName}
                setScreenshotName={setScreenshotName}
                screenshotDescription={screenshotDescription}
                setScreenshotDescription={setScreenshotDescription}
                handleScreenshotSubmit={handleScreenshotSubmit}
                deleteScreenshot={deleteScreenshot}
                indexScreenshot={indexScreenshot}
                setIndexScreenshot={setIndexScreenshot}
                screenshotImagePreviewUrl={screenshotImagePreviewUrl}
                setScreenshotImagePreviewUrl={setScreenshotImagePreviewUrl}
                dataScreenshots={dataScreenshots}
                />
            <AppFooter scrollUp={scrollUp}>
                <BackToTopButton/>
            </AppFooter>
        </div>                
    )
}
export default App;