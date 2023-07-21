import React from "react";

import Cart from "./components/Cart";
import Card from "./components/Card";
import Header from "./components/Header";

import search from "./images/search.svg";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [isEmpty, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    React.useEffect(() => {
        fetch("https://64b9934679b7c9def6c13236.mockapi.io/items")
        .then(response => response.json())
        .then(response => setItems(response))

        fetch("https://64b9934679b7c9def6c13236.mockapi.io/cart")
        .then(response => response.json())
        .then(response => setCartItems(response))
    }, []);

    const onAddToCart = (item) => {
        if (!cartItems.includes(item)) {
            setCartItems(prev => [...prev, item]);

            fetch("https://64b9934679b7c9def6c13236.mockapi.io/cart", {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
        }
    }

    const onRemoveFromCart = (item) => {
        setCartItems(prev => prev.filter((obj) => obj !== item));
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (<>
        { isEmpty && <Cart items={ cartItems } onRemove={ (item) => onRemoveFromCart(item) } onClose={ () => setCartOpened(false) } /> }
        <Header 
            setCartOpened={ () => setCartOpened(true) }
        />
        <main className="content">
            <div className="content__top">
                <h2 className="content__top-title">{ searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки" }</h2>
                <div className="content__top-search">
                    <img src={ search } alt="search" width={ 16 } height={ 16 } />
                    <input placeholder="Поиск..." onChange={ onChangeSearchInput } value={ searchValue } ></input>
                </div>
            </div>
            <div className="content__products">
                { items
                    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, i) => (
                    <Card
                        title={ item.title } 
                        imageURL={ item.imageURL } 
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