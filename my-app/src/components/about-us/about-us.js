import './about-us.scss'
const AboutUs = ({handleOpenModal}) => {
    
    
    return (
        <div className='about-us' id='scrollToAboutUs'>
            <h3 tabIndex={0}>О нас</h3>
            <p tabIndex={0}>Вождь орды прозвал нашу команду "шакалами" за нашу беспринципность.
            Будь то группа соратников или одиночка, волею судьбы забредшие на нашу территорию, выход
            один - смерть. Вступай в наши ряды и гарантированно получи напарников для арены, полей боя,
            пвп в открытом мире и эпохальных ключей!</p>
            <button onClick={()=>handleOpenModal(!false)} 
                tabIndex={0}>
                    join
            </button>
        </div>
    )
}

export default AboutUs