import './Header.css';

const Header = () => {
    return (
        <header className='header-section'>
            <img alt="main-img" src={require('../images/header-img.jpg')}></img>
        </header>
    )
}

export default Header