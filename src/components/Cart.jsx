import React from "react";
import axios from "axios";

import { useCart } from "../hooks/useCart";

import EmptyBlock from "./EmptyBlock";

import remove from "../images/remove.svg";
import succesfullOrder from "../images/successful-order.jpg";
import arrowRight from "../images/arrow-right.svg";
import cartEmpty from "../images/cart-empty.png";

function Cart() {
    const { cartItems, setCartOpened, onRemoveFromCart, setCartItems, setOrdersItems, totalPrice, isCartOpened, delay } = useCart();

    const [isOrdered, setIsOrdered] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [orderID, setOrderID] = React.useState(null);

    const onConfirmOrder = async () => {
        try {
            setIsOrdered(true);
            setIsLoading(true);
            
            const { data } = await axios.post("https://64b9934679b7c9def6c13236.mockapi.io/orders", {items: cartItems, price: totalPrice + totalPrice * 0.05} ); 
            setOrdersItems(prev => [...prev, data]);
            setOrderID(data.id);

            cartItems.forEach(item => onRemoveFromCart(item.id));
            setCartItems([]);
            
            await delay(1000);
        } catch(err) {
            alert("Не удалось создать заказ :(");
        }
        setIsLoading(false);
    }

    const fullCart = () => (<>
        <div className="cart__products">
            { cartItems.map((item, i) => {
                return (
                    <div className="cart__products-item item" key={ i } >
                        <img src={ item.imageURL } alt="Товар" width={ 70 } height={ 70 } />
                        <p className="item__title">
                            <span className="item__title-top">{ item.title }</span>
                            <span className="item__title-bottom">{ `${item.price} руб.` }</span>
                        </p>
                        <button className="item__btn" onClick={ () => onRemoveFromCart(item.id) } >
                            <img src={ remove } alt="remove" width={ 11 } height={ 11 } />
                        </button>
                    </div>
                )}
            )}
        </div>
        <div className="cart__price">
            <p className="cart__price-left">Итого:</p>
            <span className="cart__price-middle"></span>
            <p className="cart__price-right">{`${cartItems.reduce((sum, item) => sum + item.price, 0 )} руб.` }</p>
        </div>
        <div className="cart__tax">
            <p className="cart__tax-left">Налог 5%:</p>
            <span className="cart__tax-middle"></span>
            <p className="cart__tax-right">{`${Math.floor(cartItems.reduce((sum, item) => sum + item.price, 0 ) * 0.05)} руб.` }</p>
        </div>
        <button className="cart__btn" disabled={ isLoading } onClick={ onConfirmOrder } >
            <span className="cart__btn-text">Оформить</span>
            <img src={ arrowRight } alt="buy" width="14px" height="12px" />
        </button>
    </>)

    return (<div className="blackout" style={ isCartOpened ? { visibility: "visible", opacity: 1 } : { visibility: "hidden", opacity: 0 }} >
        <div className="blackout__cart cart" style={ isCartOpened ? { transform: "translateX(-385px)" } : { transform: "translateX(385px)" } }>
            <div className="cart__title">
                <h2 className="cart__title-left">Корзина</h2>
                <button className="cart__title-right" onClick={ () => setCartOpened(false) } >
                    <img src={ remove } alt="remove" width={ 11 } height={ 11 } />
                </button>
            </div>
            { cartItems.length !== 0 ? fullCart() : <EmptyBlock 
                                                        title = { isOrdered ? "Заказ оформлен!" : "Корзина пустая" } 
                                                        description = { isOrdered ? `Ваш заказ #${orderID} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ." }
                                                        image = { isOrdered ? succesfullOrder : cartEmpty } 
                                                        width = { isOrdered ? 83 : 120 }
                                                        height = { 120 }
                                                        isBackToHome = { false }
                                                    />}
        </div>
    </div>)
}

export default Cart;