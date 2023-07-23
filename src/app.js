import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

import Cart from "./components/Cart";
import Header from "./components/Header";

import appContext from "./context";

function App() {
    const [items, setItems] = React.useState([]);
    const [likedItems, setLikedItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [isCartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get("https://64bc05a37b33a35a4446ef8a.mockapi.io/cart");
            const favouritesResponse = await axios.get("https://64bc05a37b33a35a4446ef8a.mockapi.io/favourites");
            const itemsResponse = await axios.get("https://64b9934679b7c9def6c13236.mockapi.io/items");

            setCartItems(cartResponse.data);
            setLikedItems(favouritesResponse.data);
            setItems(itemsResponse.data);
            setIsLoading(false);
        }
        fetchData();
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
        try {
            await axios.delete(`https://64bc05a37b33a35a4446ef8a.mockapi.io/cart/${id}`);

            setCartItems(prev => prev.filter((item) => item.id !== id));
        } catch (err) {
            alert("Не удалось выполнить запрос");
        }
    }

    const onAddToFavourites = async (item) => {
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

    const isInCart = title => cartItems.find(obj => obj.title === title) ? true : false;

    const isInFavourites = title => likedItems.find(obj => obj.title === title) ? true : false;

    return (
        <appContext.Provider value={{ items, cartItems, likedItems, isInCart, isInFavourites, setCartOpened, onAddToCart, onRemoveFromCart, onAddToFavourites }} >

            { isCartOpened && <Cart /> }

            <Header />

            <Routes>
                <Route path="/" exact element={
                    <Home
                        searchValue = { searchValue }
                        onChangeSearchInput = { onChangeSearchInput }
                        isLoading = { isLoading }
                    />}    
                />

                <Route path="/favourites" exact element={ 
                    <Favourites />} 
                />
            </Routes>
        </appContext.Provider>
    )
}

export default App;