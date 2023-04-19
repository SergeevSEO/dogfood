import { useEffect, useState } from "react"
import { CardItem } from "../CardItem";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI5MDgiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ5LCJleHAiOjE3MTAzMzg0NDl9.ueVjcLvvxuzr5_jhp43vMeRe2DSpoJefoUrYrx6zPPQ';

export const CardList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const dataProduct = async () => {
            const res = await fetch('https://api.react-learning.ru/products', {
                headers: {
                    Authorization: 'Bearer ' + TOKEN
                }
            })
            if(!res.ok){
                return setProducts({message:"Что-то пошло не так!"})
            }
            const data = await res.json();
            const products = data.products;
            setProducts(products);

        }
        dataProduct();
    }, [])
    
    if (products.message) {
        return(
            <div className="error">{products.message}</div>
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