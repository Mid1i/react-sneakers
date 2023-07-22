import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
    const [items, setItems] = React.useState([]);
    const [likedItems, setLikedItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [isEmpty, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    React.useEffect(() => {
        axios.get("https://64b9934679b7c9def6c13236.mockapi.io/items")
        .then(response => setItems(response.data));

        axios.get("https://64bc05a37b33a35a4446ef8a.mockapi.io/cart")
        .then(response => setCartItems(response.data));

        axios.get("https://64bc05a37b33a35a4446ef8a.mockapi.io/favourites")
        .then(response => setLikedItems(response.data));
    }, []);

    const onAddToCart = async (item) => {
        try {
            if (cartItems.find((obj) => obj.title === item.title)) {
                item = cartItems.find((obj) => obj.title === item.title);
                const { data } = await axios.delete(`https://64bc05a37b33a35a4446ef8a.mockapi.io/cart/${item.id}`);
                setCartItems(prev => prev.filter(obj => obj.title !== data.title));
            } else {
                const { data } = await axios.post("https://64bc05a37b33a35a4446ef8a.mockapi.io/cart", item);
                setCartItems(prev => [...prev, data]);
            }
        } catch (err) {
            alert("Не удалось выполнить запрос");
        }
    }

    const onRemoveFromCart = async (id) => {
        await axios.delete(`https://64bc05a37b33a35a4446ef8a.mockapi.io/cart/${id}`);

        setCartItems(prev => prev.filter((item) => item.id !== id));
    }

    const onAddToFavourite = async (item) => {
        try {
            if (likedItems.find((obj) => obj.title === item.title)) {
                item = likedItems.find((obj) => obj.title === item.title);
                const { data } = await axios.delete(`https://64bc05a37b33a35a4446ef8a.mockapi.io/favourites/${item.id}`);
                setLikedItems(prev => prev.filter(obj => obj.title !== data.title));
            } else {
                const { data } = await axios.post("https://64bc05a37b33a35a4446ef8a.mockapi.io/favourites", item);
                setLikedItems(prev => [...prev, data]);
            }
        } catch (err) {
            alert("Не удалось выполнить запрос");
        }
    }
    
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (<>
        { isEmpty && <Cart items={ cartItems } onRemove={ onRemoveFromCart } onClose={ () => setCartOpened(false) } /> }
        <Header 
            setCartOpened={ () => setCartOpened(true) }
        />
        <Routes>
            <Route path="/" exact element={
                <Home 
                    items = { items }
                    searchValue = { searchValue }
                    onChangeSearchInput = { onChangeSearchInput }
                    onAddToFavourite = { onAddToFavourite }
                    onAddToCart = { onAddToCart }
                />}    
            />

            <Route path="/favourites" exact element={ 
                <Favourites 
                    items = { likedItems }
                    onAddToFavourite = { onAddToFavourite }
                    onAddToCart = { onAddToCart }
                    isInFavourites = { true }
                />} 
            />
        </Routes>
    </>)
}

export default App;