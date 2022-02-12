
import './app-header.scss'


const AppHeader = () => {
    return (
        <div className='app-header'>
            <h1 tabIndex={0}>Шакалы Азерота</h1>
            <img className='logo'                
                alt='jakal is roaring' 
                height={100} 
                width={100}
                tabIndex={0}>
            </img>
            <p tabIndex={0}>Мы - группа друзей, играем в World of Warcraft со времён дополнения 'Battle for Azeroth'.</p>
            <button tabIndex={0}>о нас</button>
        </div>
    )
}

export default AppHeader