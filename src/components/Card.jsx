import React from "react";

import appContext from "../context";

import plusDefault from "../images/plus-default.svg";
import plusAdded from "../images/plus-added.svg";
import heartDefault from "../images/heart-default.svg";
import heartLiked from "../images/heart-liked.svg";

function Card({ id, imageURL, title, price, addBtn }) {
    const { isInCart, isInFavourites, onAddToCart, onAddToFavourites } = React.useContext(appContext);
    
    return (
        <div className="content__products-item product" >
            <img 
                className="product__icon" 
                src={ isInFavourites(title) ? heartLiked : heartDefault } 
                onClick={ () => onAddToFavourites({ id, imageURL, title, price }) } 
                alt="heart" 
                width={ 32 } 
                height={ 32 } 
            />
            <img src={ imageURL } alt="" width={ 130 } height={ 112 } />
            <h4 className="product__title"> { title } </h4>
            <div className="product__bottom">
                <div className="product__bottom-price price">
                    <p className="price__top">Цена:</p>
                    <p className="price__bottom"> { `${price} руб.` } </p>
                </div>
                { addBtn && <img 
                    className="product__bottom-btn" 
                    src={ isInCart(title) ? plusAdded : plusDefault } 
                    onClick={ () => onAddToCart({ id, imageURL, title, price }) } 
                    alt="buy" 
                    width={ 32 } 
                    height={ 32 } 
                />}
            </div>
        </div>
    )
}

export default Card;