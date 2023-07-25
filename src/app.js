import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";

import Cart from "./components/Cart";
import Header from "./components/Header";

import appContext from "./context";

function App() {
    const [items, setItems] = React.useState([]);
    const [likedItems, setLikedItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [ordersItems, setOrdersItems] = React.useState([]);
    const [isCartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const [ cartResponse, favouritesResponse, itemsResponse, ordersItemsResponse ] = await Promise.all([
                    axios.get("https://64bc05a37b33a35a4446ef8a.mockapi.io/cart"),
                    axios.get("https://64bc05a37b33a35a4446ef8a.mockapi.io/favourites"),
                    axios.get("https://64b9934679b7c9def6c13236.mockapi.io/items"),
                    axios.get("https://64b9934679b7c9def6c13236.mockapi.io/orders")
                ])
                
                setOrdersItems(ordersItemsResponse.data);
                setCartItems(cartResponse.data);
                setLikedItems(favouritesResponse.data);
                setItems(itemsResponse.data);
                setIsLoading(false);
            } catch (error) {
                alert ("Не удалось обработать запрос");
                console.error(error);
            }
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
        } catch (error) {
            alert("Ошибка при добавлении в корзину");
            console.error(error)
        }
    }

    const onRemoveFromCart = async (id) => {
        try {
            await axios.delete(`https://64bc05a37b33a35a4446ef8a.mockapi.io/cart/${id}`);

            setCartItems(prev => prev.filter((item) => item.id !== id));
        } catch (error) {
            alert("Ошибка при удалении из корзины");
            console.error(error);
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
        } catch (error) {
            alert("Ошибка при добавлении в закладки");
            console.error(error);
        }
    }
    
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    const isInCart = title => cartItems.find(obj => obj.title === title) ? true : false;

    const isInFavourites = title => likedItems.find(obj => obj.title === title) ? true : false;

    if (isCartOpened) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return (
        <appContext.Provider value={{ items, cartItems, likedItems, ordersItems, isCartOpened, isInCart, isInFavourites, setCartOpened, onAddToCart, onRemoveFromCart, onAddToFavourites, setCartItems, setOrdersItems }} >
            
            <Cart />
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
                    <Favourites isLoading = { isLoading } />} 
                />

                <Route path="/profile" exact element={ 
                    <Profile isLoading = { isLoading } />} 
                />
            </Routes>
        </appContext.Provider>
    )
}

export default App;