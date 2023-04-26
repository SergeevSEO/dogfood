import './cardList.css'
import { useEffect, useState } from "react"
import { CardItem } from "../CardItem";
import {TOKEN} from '../../utils/consts.js'

export const CardList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const dataProduct = async () => {
            const res = await fetch('https://api.react-learning.ru/products', {
                headers: {
                    Authorization: 'Bearer ' + TOKEN
                }
            })
            if(!res.ok){
                return setError({message:"Что-то пошло не так!"})
            }
            const data = await res.json();
            const products = data.products;
            setProducts(products);

        }
        dataProduct();
    }, [])
    
    if (error.message) {
        return(
            <div className="error">{error.message}</div>
        )
    }
    return (

        <div className="card-list">
            {products.map((product) => {
                return <CardItem key={product._id} product = {product} />
            })}
        </div>
        
    )
}