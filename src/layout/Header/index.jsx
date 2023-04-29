import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="head">
                    <div className="head__logo">
                        Dog Food
                    </div>
                    <button className="head__text">
                        Выйти
                    </button>
                </div>
            </div>
        </header>
    )
}