import { NavLink, useNavigate } from 'react-router-dom'
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
                       <NavLink to="/" className="head__logo">Dog Food</NavLink> 
                    </div>
                    {token && <nav className='nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <NavLink to="/catalog" end>Каталог</NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink to="/about-me">Обо мне</NavLink> 
                            </li>
                        </ul>
                        <button className='nav__btn' onClick={exitAccount}>Выйти</button> 
                    </nav>}
                </div>
            </div>
        </header>
    )
}