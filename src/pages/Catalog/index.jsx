import './catalog.css'
import { CardList } from "../../components/CardList"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


export const Catalog = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) navigate('/signin')
    }, [navigate])

    return (
        <>
            <h1>Каталог</h1>
            <CardList />
        </>
    )
}