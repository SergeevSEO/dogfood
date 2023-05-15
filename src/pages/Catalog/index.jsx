import './catalog.css'
import { CardList } from "../../components/CardList"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { AUTH_TOKEN } from '../../utils/consts';


export const Catalog = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem(AUTH_TOKEN)

    useEffect(() => {
        if (!token) navigate('/signin')
    }, [navigate, token])

    return (
        <>
            <h1>Каталог</h1>
            <CardList />
        </>
    )
}