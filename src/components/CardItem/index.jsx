
export const CardItem = ( {product} ) => {
    
    
    const showCost = (product) => {
        if(product.discount && product.discount < 100){
            let priceSaleNumber = (product.price - product.price * (product.discount/100));
            let priceSale = priceSaleNumber + " руб.";
            return (
                <div className="card__price-wrapper">
                    <div className="card__price card__price_orange">
                        {priceSale}
                    </div>
                    <div className="card__price-sale">
                        {product.price} руб.
                    </div>
                </div>
            )
        }
        return (
            <div className="card__price">
                {product.price} руб.
            </div>
            )
    }
    
    
    return (
        <div className="card-list"> 
           <div className="card">
                <div className="card__top">
                    <img className="card__img" src={product.pictures} alt={product.name} />
                    <p className="card__name">{product.name}</p>
                </div>
                <div className="card__bottom">
                    <div className="card__info">
                        {showCost(product)}
                        <div className="card__weight">
                            {product.wight}
                        </div>
                    </div>
                    <button className="btn btn-order">
                        Заказать
                    </button>
                </div>
            </div>
        </div>
    )
}