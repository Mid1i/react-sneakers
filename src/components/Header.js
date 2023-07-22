import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import cart from "../images/cart.svg";
import favourite from "../images/favourite.svg";
import profile from "../images/profile.svg";

function Header(props) {
    return(<header className="header">
        <Link to="/" className="header__logo">
            <img src={ logo } alt="logo" width="40px" height="40px" />
            <p className="header__title">
                <span className="header__title-top">React Sneakers</span>
                <span className="header__title-bottom">Магазин лучших кроссовок</span>
            </p>
        </Link>

        <ul className="header__icons">
            <li className="header__icons-el" onClick={ props.setCartOpened } >
                <img src={ cart } alt="cart" width="20px" height="20px" />
                <span>1205 руб.</span>
            </li>
            <li className="header__icons-el header__icons-el--middle">
                <Link to="/favourites">
                    <img src={ favourite } alt="favourite" width="22px" height="19px" />
                </Link>
            </li>
            <li className="header__icons-el">
                <img src={ profile } alt="profile" width="20px" height="20px" />
            </li>       
        </ul>
    </header>)
}

export default Header;