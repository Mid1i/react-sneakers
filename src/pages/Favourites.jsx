import { Link } from "react-router-dom";

import Card from "../components/Card";

import backArrow from "../images/arrow-back.svg";

function Favourites({ items, onAddToCart, onAddToFavourite, isInFavourites }) {
    return(
        <main className="content">
            <div className="content__top content__top--favourites">
                <Link to="/">
                    <img className="content__top-image" src={ backArrow } alt="back" />
                </Link>
                <h2 className="content__top-title">Мои закладки</h2>
            </div>
            <div className="content__products">
                { items.map((item, i) => (
                    <Card 
                        key={ i }
                        onAdd={ () => onAddToCart(item) }
                        onLike={ () => onAddToFavourite(item) }
                        isInFavourites={ isInFavourites }
                        {...item}
                    />
                ))}
            </div>
        </main>
    )
}

export default Favourites;