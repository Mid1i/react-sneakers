import React from "react";

function App() {
    return (<>
        <header className="main-header">
            <div className="main-header__left-block">
                <img className="left-block__logo" src="./img/header-icons/1.svg" alt="Логотип магазина «React Sneakers»" />
                <div className="left-block__text-block">
                    <h2 className="left-block__title">React Sneakers</h2>
                    <p className="left-block__text">Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="main-header__right-block">
                <ul className="right-block__list">
                    <li className="right-block__el">
                        <img className="right-block__img" src="./img/header-icons/2.svg" alt="Корзина" />
                        <span className="right-block__price">1205 руб.</span>
                    </li>
                    <li className="right-block__el">
                        <img className="right-block__img" src="./img/header-icons/3.svg" alt="Закладки" />
                    </li>
                    <li className="right-block__el">
                        <img className="right-block__img" src="./img/header-icons/4.svg" alt="Личный кабинет" />
                    </li>       
                </ul>
            </div>
        </header>
        <main className="main-content">
            <div className="main-content__top-block">
                <h2 className="main-content__title">Все кроссовки</h2>
                <div className="main-content__search">
                    <img src="./img/main-icons/1.svg" alt="" />
                    <input className="main-content__input" placeholder="Поиск..."></input>
                </div>
            </div>
            <div className="main-content__main-block">
                <div className="main-content__item">
                    <img className="item__fav" src="./img/main-icons/liked.svg" alt="" />
                    <img width={ 130 } height={ 112 } src="./img/main-goods/1.jpg" alt="" />
                    <h4 className="item__title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
                    <div className="item__price-block">
                        <div className="price-block__left-block">
                            <p className="price-block__text">Цена:</p>
                            <p className="price-block__price">12 999 руб.</p>
                        </div>
                        <button className="price-block__btn">
                            <img width={ 11 } height={ 11 } src="./img/main-icons/2.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="main-content__item">
                <img className="item__fav" src="./img/main-icons/unliked.svg" alt="" />
                    <img width={ 130 } height={ 112 } src="./img/main-goods/2.jpg" alt="" />
                    <h4 className="item__title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
                    <div className="item__price-block">
                        <div className="price-block__left-block">
                            <p className="price-block__text">Цена:</p>
                            <p className="price-block__price">12 999 руб.</p>
                        </div>
                        <button className="price-block__btn">
                            <img width={ 11 } height={ 11 } src="./img/main-icons/2.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="main-content__item">
                    <img className="item__fav" src="./img/main-icons/unliked.svg" alt="" />
                    <img width={ 130 } height={ 112 } src="./img/main-goods/3.jpg" alt="" />
                    <h4 className="item__title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
                    <div className="item__price-block">
                        <div className="price-block__left-block">
                            <p className="price-block__text">Цена:</p>
                            <p className="price-block__price">12 999 руб.</p>
                        </div>
                        <button className="price-block__btn">
                            <img width={ 11 } height={ 11 } src="./img/main-icons/2.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="main-content__item">
                    <img className="item__fav" src="./img/main-icons/unliked.svg" alt="" />
                    <img width={ 130 } height={ 112 } src="./img/main-goods/4.jpg" alt="" />
                    <h4 className="item__title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
                    <div className="item__price-block">
                        <div className="price-block__left-block">
                            <p className="price-block__text">Цена:</p>
                            <p className="price-block__price">12 999 руб.</p>
                        </div>
                        <button className="price-block__btn">
                            <img width={ 11 } height={ 11 } src="./img/main-icons/2.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </>)
}

export default App;