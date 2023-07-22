import Card from "../components/Card";

import search from "../images/search.svg";

function Home({ items, searchValue, onChangeSearchInput, onAddToFavourite, onAddToCart}) {
    return(
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
                        key={ i }
                        onAdd={ () => onAddToCart(item) }
                        onLike={ () => onAddToFavourite(item) }
                        {...item}
                    />))
                }
            </div>
        </main>
    )
}

export default Home;