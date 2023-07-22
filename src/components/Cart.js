import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

import remove from "../images/remove.svg";

function Cart({ onClose, items = [], onRemove }) {
    return (<div className="blackout">
        <div className="blackout__cart cart">
            <div className="cart__title">
                <h2 className="cart__title-left">Корзина</h2>
                <button className="cart__title-right" onClick={ onClose } >
                    <img src={ remove } alt="remove" width={ 11 } height={ 11 } />
                </button>
            </div>
            { items.length === 0 ? <EmptyCart onClose={ onClose } /> : <FullCart items={ items } onRemove={ onRemove } /> }
        </div>
    </div>)
}

export default Cart;