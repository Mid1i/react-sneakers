import React from "react";

import Cart from "./components/Cart";
import Card from "./components/Card";
import Header from "./components/Header";

import search from "./images/search.svg";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [isEmpty, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch("https://64b9934679b7c9def6c13236.mockapi.io/items")
        .then(response => response.json())
        .then(response => setItems(response))
    }, []);

    const onAddToCart = (item) => {
        if (!cartItems.includes(item)) {
            setCartItems(prev => [...prev, item]);
        }
    }

    return (<>
        { isEmpty && <Cart items={ cartItems } onClose={ () => setCartOpened(false) } /> }
        <Header 
            setCartOpened={ () => setCartOpened(true) }
        />
        <main className="content">
            <div className="content__top">
                <h2 className="content__top-title">Все кроссовки</h2>
                <div className="content__top-search">
                    <img src={ search } alt="search" width={ 16 } height={ 16 } />
                    <input placeholder="Поиск..."></input>
                </div>
            </div>
            <div className="content__products">
                { items.map((item, i) => (
                    <Card
                        title={ item.name } 
                        imageURL={ item.src } 
                        price={ item.price } 
                        key={ i }
                        onAdd={ () => onAddToCart(item) }
                    />))
                }
            </div>
        </main>
    </>)
}

export default App;