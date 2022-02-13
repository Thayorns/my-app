import './app-footer.scss'

const AppFooter = () => {
    return (
        <div className='app-footer'>
            <button className='up-button' aria-label='scroll-up button'></button>
            <img className='footer-logo'//make constructor or variable                 
                alt='jakal is roaring' 
                height={70} 
                width={70}
                tabIndex={0}>
            </img>
            <img className='discord-link'
                alt='gamepad'
                height={46}
                width={46}
                tabIndex={0}>
            </img>
        </div>
    )
}

export default AppFooter