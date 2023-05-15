import './cardList.css'
import { useEffect, useState } from "react"
import { CardItem } from "../CardItem";
import { AUTH_TOKEN } from '../../utils/consts';

export const CardList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState([]);

    const token = localStorage.getItem(AUTH_TOKEN)

    useEffect(() => {
        const dataProduct = async () => {
            const res = await fetch('https://api.react-learning.ru/products', {
                headers: {
                    Authorization: `Bearer ${token}`
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
    }, [token])
    
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