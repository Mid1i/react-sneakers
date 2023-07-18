function Card() {
    return(<div className="content__products-item product">
        <img className="product__icon" src="./img/main-icons/unliked.svg" alt="" />
        <img src="./img/main-goods/1.jpg" alt="" width={ 130 } height={ 112 } />
        <h4 className="product__title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
        <div className="product__bottom">
            <div className="product__bottom-price price">
                <p className="price__top">Цена:</p>
                <p className="price__bottom">12 999 руб.</p>
            </div>
            <button className="product__bottom-btn">
                <img src="/img/main-icons/2.svg" alt="buy" width={ 11 } height={ 11 } />
            </button>
        </div>
    </div>)
}

export default Card;