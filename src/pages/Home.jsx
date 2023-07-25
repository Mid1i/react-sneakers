import React from "react";

import LoadingCard from "../components/LoadingCard";
import Card from "../components/Card";

import appContext from "../context";

import search from "../images/search.svg";

function Home({ searchValue, onChangeSearchInput, isLoading }) {
    const { items } = React.useContext(appContext); 
    
    const renderItems = () => {
        return (
            items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, i) => (
                <Card addBtn = { true } key = { i } {...item} />
            ))
        )
    }
    
    return(
        <main className="content">
            <div className="content__top">
                <h2 className="content__top-title">{ searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки" }</h2>
                <div className="content__top-search">
                    <img src={ search } alt="search" width={ 16 } height={ 16 } />
                    <input placeholder="Поиск..." onChange={ onChangeSearchInput } value={ searchValue } ></input>
                </div>
            </div>
            <div className="content__products">{ isLoading ? <LoadingCard /> : renderItems() }</div>
        </main>
    )
}

export default Home;