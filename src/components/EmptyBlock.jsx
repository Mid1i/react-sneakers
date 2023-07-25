import React from 'react'
import { Link } from "react-router-dom";

import appContext from "../context";

import arrowLeft from "../images/arrow-left.svg";

function EmptyBlock({ title, description, image, width, height, isBackToHome }) {
    const { setCartOpened } = React.useContext(appContext);
    
    const onBack = () => {
        return (
            <button className="empty__btn" onClick={ () => setCartOpened(false) } >
                <img src={ arrowLeft } alt="back" width="14px" height="12px" />
                <span className="empty__btn-text">Вернуться назад</span>
            </button>
        )
    }

    return (
        <div className="empty">
            <img src={ image } alt="empty" width={ width } height={ height } />
            <h2 className="empty__title">{ title }</h2>
            <p className="empty__text">{ description }</p>
            { isBackToHome ? <Link to="/">{ onBack() }</Link> : onBack() }
        </div>
    )
}

export default EmptyBlock;