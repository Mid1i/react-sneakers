function Header() {
    return(<header className="header">
        <a href="/" className="header__logo">
            <img src="/img/header-icons/1.svg" alt="logo" width="40px" height="40px" />
            <p className="header__title">
                <span className="header__title-top">React Sneakers</span>
                <span className="header__title-bottom">Магазин лучших кроссовок</span>
            </p>
        </a>

        <ul className="header__icons">
            <li className="header__icons-el">
                <img src="/img/header-icons/2.svg" alt="cart" width="20px" height="20px" />
                <span>1205 руб.</span>
            </li>
            <li className="header__icons-el header__icons-el--middle">
                <img src="/img/header-icons/3.svg" alt="favourite" width="22px" height="19px" />
            </li>
            <li className="header__icons-el">
                <img src="/img/header-icons/4.svg" alt="profile" width="20px" height="20px" />
            </li>       
        </ul>
    </header>)
}

export default Header;