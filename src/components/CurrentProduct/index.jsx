import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import {TOKEN} from '../../utils/consts.js'
import './currentProduct.css'

export const CurrentProduct = () => {

    const {idOfProduct} = useParams();

    const [currentProduct, setCurrentProduct] = useState([]);
    const [error, setError] = useState([]);
    useEffect(() => {
        const getCurrentProduct = async(id) => {
            const res = await fetch(`https://api.react-learning.ru/products/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + TOKEN
                }
            })
            if(!res.ok){
                return setError({message:"Что-то пошло не так!"})
            }
            const response = await res.json()
            console.log(response);
            setCurrentProduct(response)
        }

        getCurrentProduct(idOfProduct)
    }, [idOfProduct])
    if (error.message) {
        return(
            <div className="error">{error.message}</div>
        )
    }

    return (
        <div className="currentCard">
            <Link to=".." relative="path" className="currentCard__link">Вернуться в Каталог</Link>
            <div className="currentCard__wrapper">
                <img 
                src={currentProduct.pictures} 
                alt={currentProduct.name}
                className="currentCard__img"
                />
                <div className="currentCard__info">
                    <h1 className="currentCard__h1">{currentProduct.name}</h1>
                    {currentProduct.discount && currentProduct.discount < 100 ? (
                        <div className="currentCard__price-wrapper">
                            <div className="currentCard__price-sale">{currentProduct.price} руб.</div>
                            <div className="currentCard__price">
                            {currentProduct.price - currentProduct.price * (currentProduct.discount / 100)} руб.
                            </div>
                        </div>
                        ) : (
                        <div className="currentCard__price">{currentProduct.price} руб.</div>
                        )
                    }
                    <p>Тут будет выбор количества товара</p>
                    <button className="btn btn-order">Заказать</button>
                    <p className="currentCard__h2">Описание:</p>
                    <p className="currentCard__description">{currentProduct.description}</p>
                </div>
            </div>
            <div className="currentCard__reviews">Тут должны быть отзывы</div>
        </div>
        
    )
}