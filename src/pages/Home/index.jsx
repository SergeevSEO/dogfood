import { useNavigate } from 'react-router-dom';
import dog from '../../assets/dog.jpg';
import './home.css';
import { AUTH_TOKEN } from '../../utils/consts';
import { useEffect, useState } from 'react';

export const Home = () => {
    const navigate = useNavigate();
    const [auth, isAuth] = useState(false)
    const token = localStorage.getItem(AUTH_TOKEN)

    useEffect(() => {
        isAuth(false)
        if (token) isAuth(true)
    }, [navigate, token])

    return (
        <>
        <h1>Интернет-магазин <br /> еды для собак</h1>
        <div className="home__wrapper">
            <p className='home__text'>
                Это ПЕТ-проект по изучению React - JavaScript-библиотеки для создания пользовательских интерфейсов.
                Чтобы перейти к просмотру каталога необходимо авторизоваться. Если у вас еще нет аккаунта - зарегистрируйтесь.
            </p>
            { auth ? <>
                        <p className='home__text-auth'> У вас уже есть токен</p>
                        <button type="submit" className="btn home__btn" onClick={() => {navigate('/catalog')}}>Перейти в каталог</button>
                    </>
                    : 
                    <div className="home__btn-wrapper">
                    <button type="submit" className="btn home__btn" onClick={() => {navigate('/signin')}}>Авторизация</button>
                    <button type="submit" className="btn home__btn" onClick={() => {navigate('/signup')}}>Регистрация</button>
                </div>
            }

            <img  src={dog} alt="Собака" className="home__img"/>
        </div>
        </>
    )
}