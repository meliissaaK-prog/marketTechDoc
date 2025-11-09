import { NavLink } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            <h1>Страница не найдена</h1>
            <NavLink to="/products">
                <button>Перейти к товарам</button>
            </NavLink>
        </div>
    )
}