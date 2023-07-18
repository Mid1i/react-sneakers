function Cart() {
    return (<div className="blackout" style={{ display: "none" }}>
        <div className="blackout__cart cart">
            <div className="cart__title">
                <h2 className="cart__title-left">Корзина</h2>
                <button className="cart__title-right">
                    <img src="/img/cart-icons/1.svg" alt="remove" width={ 11 } height={ 11 } />
                </button>
            </div>
            <div className="cart__products">
                <div className="cart__products-item item">
                    <img src="/img/main-goods/1.jpg" alt="Товар" width={ 70 } height={ 70 } />
                    <p className="item__title">
                        <span className="item__title-top">Мужские Кроссовки Nike Air Max 270</span>
                        <span className="item__title-bottom">12 999 руб.</span>
                    </p>
                    <button className="item__btn">
                        <img src="/img/cart-icons/1.svg" alt="remove" width={ 11 } height={ 11 } />
                    </button>
                </div>
                <div className="cart__products-item item">
                    <img src="/img/main-goods/1.jpg" alt="Товар" width={ 70 } height={ 70 } />
                    <p className="item__title">
                        <span className="item__title-top">Мужские Кроссовки Nike Air Max 270</span>
                        <span className="item__title-bottom">12 999 руб.</span>
                    </p>
                    <button className="item__btn">
                        <img src="/img/cart-icons/1.svg" alt="remove" width={ 11 } height={ 11 } />
                    </button>
                </div>
                <div className="cart__products-item item">
                    <img src="/img/main-goods/1.jpg" alt="Товар" width={ 70 } height={ 70 } />
                    <p className="item__title">
                        <span className="item__title-top">Мужские Кроссовки Nike Air Max 270</span>
                        <span className="item__title-bottom">12 999 руб.</span>
                    </p>
                    <button className="item__btn">
                        <img src="/img/cart-icons/1.svg" alt="remove" width={ 11 } height={ 11 } />
                    </button>
                </div>  
            </div>
            <div className="cart__price">
                <p className="cart__price-left">Итого:</p>
                <span className="cart__price-middle"></span>
                <p className="cart__price-right">21 498 руб.</p>
            </div>
            <div className="cart__tax">
                <p className="cart__tax-left">Налог 5%:</p>
                <span className="cart__tax-middle"></span>
                <p className="cart__tax-right">1074 руб.</p>
            </div>
            <button className="cart__btn">
                <span className="cart__btn-text">Оформить</span>
                <img src="/img/cart-icons/2.svg" alt="buy" width="14px" height="12px" />
            </button>
        </div>
    </div>)
}

export default Cart;