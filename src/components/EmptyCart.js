import arrowLeft from "../images/arrow-left.svg";
import cartEmpty from "../images/cart-empty.png";

function EmptyCart({ onClose }) {
    return (
        <div className="cart__empty">
            <img src={ cartEmpty } alt="empty" width={ 120 } height={ 120 } />
            <h4 className="cart__empty-title">Корзина пустая</h4>
            <p className="cart__empty-text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="cart__empty-btn" onClick={ onClose } >
                <img src={ arrowLeft } alt="back" width="14px" height="12px" />
                <span className="cart__btn-text">Вернуться назад</span>
            </button>
        </div>
    )
}

export default EmptyCart;