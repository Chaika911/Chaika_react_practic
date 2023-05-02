import React from "react";

const ProductCard = (props) => {

    const {
        id,
        name,
        image,
        price,
        description
    } = props;

    const src = require(`../../assets/${image}`)

    return(
        <div className="card">
            <img src={src} className="card-image"/>
            <div className="card-text">

                <div className="card__heading">
                    <h3 className="card__title card-title-reg">{name}</h3>
                </div>
                <div className="card-info">
                        <div className="ingrediants">{description}</div>
                </div>
                <div className="card-buttons">
                    <button className="button button-primary button-add-card">
                        <span className="button-card-text">Вкорзину</span>
                        <span className="button-card-svg"></span>
                    </button>
                    <strong className="card-price-bold card-price"> Ціна {price} грн</strong>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;