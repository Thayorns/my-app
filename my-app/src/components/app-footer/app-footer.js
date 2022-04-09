import './app-footer.scss'

const AppFooter = () => {
    
    const onScrollToElement = () => {
        const element = document.getElementById('scrollToHeader');
        element.scrollIntoView({block: "start", behavior: "smooth"})
    }

    
    return (
        <div className='app-footer'>
            <button className='up-button' aria-label='scroll-up button'
                onClick={onScrollToElement}></button>
            <img className='footer-logo'//make constructor or variable                 
                alt='jakal is roaring' 
                height={70} 
                width={70}
                tabIndex={0}/>
            
            <img className='discord-link'
                alt='gamepad'
                height={46}
                width={46}
                tabIndex={0}/>
            
        </div>
    )
}

export default AppFooter