import React from "react";

import plusDefault from "../images/plus-default.svg";
import plusAdded from "../images/plus-added.svg";
import heartDefault from "../images/heart-default.svg";
// import heartLiked from "../images/heart-liked.svg";

function Card({ imageURL, title, price, onAdd }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
        onAdd();
    }
    
    return (<div className="content__products-item product" >
        <img className="product__icon" src={ heartDefault } alt="heart" width={ 32 } height={ 32 } />
        <img src={ imageURL } alt="" width={ 130 } height={ 112 } />
        <h4 className="product__title"> { title } </h4>
        <div className="product__bottom">
            <div className="product__bottom-price price">
                <p className="price__top">Цена:</p>
                <p className="price__bottom"> { price } </p>
            </div>
            <img className="product__bottom-btn" src={ isAdded ? plusAdded : plusDefault } onClick={ onClickPlus } alt="buy" width={ 32 } height={ 32 } />
        </div>
    </div>)
}

export default Card;