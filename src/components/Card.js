import React from "react";

import plusDefault from "../images/plus-default.svg";
import plusAdded from "../images/plus-added.svg";
import heartDefault from "../images/heart-default.svg";
import heartLiked from "../images/heart-liked.svg";

function Card({ id, imageURL, title, price, onAdd, onLike, isInFavourites }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(isInFavourites);

    const onAddToCart = () => {
        setIsAdded(!isAdded);
        onAdd({ id, imageURL, title, price });
    }
    
    const onAddToFavourite = () => {
        setIsLiked(!isLiked);
        onLike({ id, imageURL, title, price });
    }
    
    return (<div className="content__products-item product" >
        <img className="product__icon" src={ isLiked ? heartLiked : heartDefault } onClick={ onAddToFavourite } alt="heart" width={ 32 } height={ 32 } />
        <img src={ imageURL } alt="" width={ 130 } height={ 112 } />
        <h4 className="product__title"> { title } </h4>
        <div className="product__bottom">
            <div className="product__bottom-price price">
                <p className="price__top">Цена:</p>
                <p className="price__bottom"> { `${price} руб.` } </p>
            </div>
            <img className="product__bottom-btn" src={ isAdded ? plusAdded : plusDefault } onClick={ onAddToCart } alt="buy" width={ 32 } height={ 32 } />
        </div>
    </div>)
}

export default Card;