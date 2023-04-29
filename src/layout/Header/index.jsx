import { Link, useNavigate } from 'react-router-dom'
import { AUTH_TOKEN } from '../../utils/consts'
import './header.css'

export const Header = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem(AUTH_TOKEN);

    const exitAccount = () => {
        localStorage.removeItem(AUTH_TOKEN)
        navigate('/')
    }

    return (
        <header className="header">
            <div className="container">
                <div className="head">
                    <div>
                       <Link to="/" className="head__logo">Dog Food</Link> 
                    </div>
                    {token ? <><button onClick={() => navigate('about-me')}>Обо мне</button>
                                <button onClick={exitAccount}>Выйти</button> </>
                            : <button onClick={() => navigate('signin')}>Авторизация</button>}
                </div>
            </div>
        </header>
    )
}