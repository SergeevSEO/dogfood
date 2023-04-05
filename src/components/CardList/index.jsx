import { useEffect, useState } from "react"
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
            const data = await res.json();
            const products = data.products;
            setProducts(products);

        }
        dataProduct();
    }, [])

    console.log(products);   

    return (
        <div className="card-list">
            {products.map((product) => {
                return <div className="card" key={product._id}>{product.name}</div>
            })}
        </div>
        
    )
}