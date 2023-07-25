import React from "react";

import appContext from "../context";

export const useCart = () => {
    const { cartItems, setCartOpened, onRemoveFromCart, setCartItems, setOrdersItems, isCartOpened } = React.useContext(appContext);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0 );

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    return { cartItems, setCartOpened, onRemoveFromCart, setCartItems, totalPrice, setOrdersItems, isCartOpened, delay };
}