import React from "react";
import { Link } from "react-router-dom";

import appContext from "../context";

import LoadingCard from "../components/LoadingCard";
import Card from "../components/Card";
import EmptyBlock from "../components/EmptyBlock";

import emptyOrders from "../images/orders-empty.png";
import backArrow from "../images/arrow-back.svg";

function Profile({ isLoading }) {
    const { ordersItems } = React.useContext(appContext);

    const fullOrdersBlock = () => {
        return (
            <main className="content">
                <div className="content__top content__top--favourites">
                    <Link to="/">
                        <img className="content__top-image" src={ backArrow } alt="back" />
                    </Link>
                    <h2 className="content__top-title">Мои покупки</h2>
                </div>
                <div className="content__products">
                    { isLoading ? <LoadingCard /> : ordersItems.map((item, i) => (
                        <div className="content__products-orders orders" key={ i } >
                            <h2 className="orders__title" >
                                <span className="orders__title-left">{ `Заказ № ${i + 1}`}</span>
                                <span className="orders__title-right">на сумму <span>{ `${item.price}` }</span> руб.</span>
                            </h2>
                            <div className="orders__products">
                                { item.items.map((obj, j) => (
                                    <Card key = { i + j } {...obj} addBtn = { false } />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        )
    }

    return (
        isLoading ? fullOrdersBlock() : ordersItems.length !== 0 ? fullOrdersBlock() : <EmptyBlock 
                                                            title = "У Вас пока нет заказов."
                                                            description = "Оформите свой первый заказ и он отобразится здесь."
                                                            image = { emptyOrders } 
                                                            width = { 70 }
                                                            height = { 70 }
                                                            isBackToHome = { true }
                                                        /> 
    ) 
}

export default Profile;