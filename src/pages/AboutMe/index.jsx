import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../../utils/consts";
import { aboutMeFetch } from "../../api/user";
import './aboutMe.css';

export const AboutMe = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem(AUTH_TOKEN)

    useEffect(() => {
        if (!token) navigate('/signin')
    }, [navigate, token])

    useEffect(() => {
        const getUser = async (token) => {
            const res = await aboutMeFetch(token)
            if(!res.ok){
                return setError({message:"Что-то пошло не так!"})
            }
            const response = await res.json()
            setUser(response)
        }
        getUser(token)
    }, [token])

    if (error.message) {
        return(
            <div className="error">{error.message}</div>
        )
    }

    return (
        <>
        <h1>Аккаунт</h1>
        <div className="user-wrapper">
            <img src={user.avatar} alt="Аватар"  className="user-img"/>
            <div className="user-info">
                <div className="user-info__name">
                    <span>Имя:</span> {user.name}
                </div>
                <div className="user-info__about">
                    <span>Должность:</span> {user.about}
                </div>
                <div className="user-info__email">
                    <span>Email:</span> {user.email}
                </div>
            </div>
        </div>
        </>
    )
}