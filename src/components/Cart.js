import React from "react";

import appContext from "../context";

import remove from "../images/remove.svg";
import arrowRight from "../images/arrow-right.svg";
import arrowLeft from "../images/arrow-left.svg";
import cartEmpty from "../images/cart-empty.png";

function Cart() {
    const { cartItems, setCartOpened, onRemoveFromCart } = React.useContext(appContext);

    const emptyCart = () => (
        <div className="cart__empty">
            <img src={ cartEmpty } alt="empty" width={ 120 } height={ 120 } />
            <h4 className="cart__empty-title">Корзина пустая</h4>
            <p className="cart__empty-text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="cart__empty-btn" onClick={ () => setCartOpened(false) } >
                <img src={ arrowLeft } alt="back" width="14px" height="12px" />
                <span className="cart__btn-text">Вернуться назад</span>
            </button>
        </div>
    )

    const fullCart = () => (<>
        <div className="cart__products">
            { cartItems.map((item, i) => {
                return (<div className="cart__products-item item" key={ i } >
                    <img src={ item.imageURL } alt="Товар" width={ 70 } height={ 70 } />
                    <p className="item__title">
                        <span className="item__title-top">{ item.title }</span>
                        <span className="item__title-bottom">{ `${item.price} руб.` }</span>
                    </p>
                    <button className="item__btn" onClick={ () => onRemoveFromCart(item.id) } >
                        <img src={ remove } alt="remove" width={ 11 } height={ 11 } />
                    </button>
                </div>)}
            )}
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
            <img src={ arrowRight } alt="buy" width="14px" height="12px" />
        </button>
    </>)

    return (<div className="blackout">
        <div className="blackout__cart cart">
            <div className="cart__title">
                <h2 className="cart__title-left">Корзина</h2>
                <button className="cart__title-right" onClick={ () => setCartOpened(false) } >
                    <img src={ remove } alt="remove" width={ 11 } height={ 11 } />
                </button>
            </div>
            { cartItems.length === 0 ? emptyCart() : fullCart() }
        </div>
    </div>)
}

export default Cart;