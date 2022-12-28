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

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState({
        file: 0,
        imagePreview: 0
    })
    
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Тайорн',
            description: 'Из грязи - в элема',
            img: require("../../images/thayornShaman2.jpg")            
        },
        {
            id: 2,
            name: 'Лэс',
            description: 'Открытый любовник Сильваны Ветрокрылой. Любовь к квестам, лору и коллективной игре.',
            img:  require("../../images/Les.jpg")            
        },
        {
            id: 3,
            name: 'Квен',
            description: 'Под его крыльями боссы в ключах ложаться сами собой. Любит играть в прятки за "камнем"',
            img: require("../../images/Pavel2.jpg")            
        },
        {
            id: 4,
            name: 'Мелонбласт',
            description: 'Батя. Гладиатор. Любимец публики и Великий Оратор',
            img: require("../../images/Melonblast.jpg")            
        },
        {
            id: 5,
            name: 'Шкотофка',
            description: 'Защитник стойл на Арати. Любит танцевать под луной',
            img: require("../../images/Nick.png")       
        },
        {
            id: 6,
            name: 'Стаффинг',
            description: 'Гладиатор. Гайд на прот-вара за душой',
            img: require("../../images/Stuffing.jpg")
        },
    ])
          
    // useEffect (() => {
    //     window.addEventListener('resize', () => {
    //         if(window.innerWidth < 1024) {
    //             setSideColumn(false)
    //             const appColumnSize = document.querySelector('.app')
    //             appColumnSize.style.cssText = `
    //                 width: 700px;
    //                 margin: 0 auto;`
    //         }else if(window.innerWidth < 425){
    //             setSideColumn(false)
    //             const appColumnSize = document.querySelector('.app')
    //             appColumnSize.style.cssText = `
    //                 width: 300px;
    //                 margin: 0 auto;`
    //         }else{
    //             setSideColumn(true)
    //             const appColumnSize = document.querySelector('.app')
    //             appColumnSize.style.cssText = `
    //                 max-width: 2000px;
    //                 margin: 0 auto;
    //                 height: 2485px;`
    //         }
    //     ////   window.innerWidth < 1024 ? setSideColumn(false) : setSideColumn(true)
    //     })
    //   }, [])
        
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newData = {name, description, file}
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
                active={menuActive}
                setActive={setMenuActive}
                chatActive={chatActive}
                setChatActive={setChatActive}
                data={data} setData={setData}
            />
            <CarouselPartisipants data={data} setData={setData}/>
            <AboutUs />
            <CarouselScreenshots 
                name={name}
                description={description}
                />
            <AppFooter scrollUp={scrollUp}>
                <BackToTopButton/>
            </AppFooter>
        </div>                
    )
}
export default App;