import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

import appContext from "../context";

import backArrow from "../images/arrow-back.svg";

function Favourites() {
    const { likedItems } = React.useContext(appContext);

    return(
        <main className="content">
            <div className="content__top content__top--favourites">
                <Link to="/">
                    <img className="content__top-image" src={ backArrow } alt="back" />
                </Link>
                <h2 className="content__top-title">Мои закладки</h2>
            </div>
            <div className="content__products">
                { likedItems.map((item, i) => (
                    <Card key = { i } {...item} />
                ))}
            </div>
        </main>
        // <main className="content content--empty">
        //     <img />
        //     <h2 className="content__title">Закладок нет :(</h2>
        //     <p className="content__text">Вы ничего не добавляли в закладки</p>
        //     <button className="content__btn">
        //         <img />

        //     </button>
        // </main>
    )
}

export default Favourites;