import './main.css'
import { CardList } from "../../components/CardList"


export const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <h1>Каталог</h1>
                <CardList />
            </div>
        </main>
    )
}