import React from "react";
import { Link } from "react-router-dom";

import LoadingCard from "../components/LoadingCard";
import Card from "../components/Card";
import EmptyBlock from "../components/EmptyBlock";

import appContext from "../context";

import emptyFavourites from "../images/favourites-empty.png";
import backArrow from "../images/arrow-back.svg";

function Favourites({ isLoading }) {
    const { likedItems } = React.useContext(appContext);

    const fullFavouritesBlock = () => {
        return (
            <main className="content">
                <div className="content__top content__top--favourites">
                    <Link to="/">
                        <img className="content__top-image" src={ backArrow } alt="back" />
                    </Link>
                    <h2 className="content__top-title">Мои закладки</h2>
                </div>
                <div className="content__products">
                    { isLoading ? <LoadingCard /> : likedItems.map((item, i) => (
                        <Card key = { i } {...item} addBtn = { true } />
                    ))}
                </div>
            </main>
        )
    }

    return (
        isLoading ? fullFavouritesBlock() : likedItems.length !== 0 ? fullFavouritesBlock() : <EmptyBlock 
                                                                title = "Закладок нет :("
                                                                description = "Вы ничего не добавляли в закладки."
                                                                image = { emptyFavourites } 
                                                                width = { 70 }
                                                                height = { 70 }
                                                                isBackToHome = { true }
                                                            /> 
        ) 
}

export default Favourites;