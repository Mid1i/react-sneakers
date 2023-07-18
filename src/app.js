import React from "react";

import Cart from "./components/Cart";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
    return (<>
        <Cart />
        <Header />
        <main className="content">
            <div className="content__top">
                <h2 className="content__top-title">Все кроссовки</h2>
                <div className="content__top-search">
                    <img src="/img/main-icons/1.svg" alt="search" width={ 16 } height={ 16 } />
                    <input placeholder="Поиск..."></input>
                </div>
            </div>
            <div className="content__products">
                <Card />
            </div>
        </main>
    </>)
}

export default App;