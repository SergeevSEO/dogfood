import './cardItem.css'

export const CardItem = ( {product} ) => { 
    
    const getPrice = (product) => {
        return product.price - product.price * (product.discount / 100);
    };

    return (
        <div className="card">
            <div className="card__top">
                <img className="card__img" src={product.pictures} alt={product.name} />
                <p className="card__name">{product.name}</p>
            </div>
            <div className="card__bottom">
                <div className="card__info">
                {product.discount && product.discount < 100 ? (
                    <div className="card__price-wrapper">
                        <div className="card__price card__price_orange">
                        {getPrice(product)} руб.
                        </div>
                        <div className="card__price-sale">{product.price} руб.</div>
                    </div>
                    ) : (
                    <div className="card__price">{product.price} руб.</div>
                    )}
                    <div className="card__weight">
                        {product.wight}
                    </div>
                </div>
                <button className="btn btn-order">
                    Заказать
                </button>
            </div>
        </div>
    )
}