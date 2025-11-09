
import { useState } from "react"

export default function Footer() {
    const [isShown, setIsShown] = useState(true)

    return (
        <div>

            {isShown && (
                <div id="footer" className="bg-gray-800 text-white p-4 mt-5">
                    <h2 className="text-center font-bold">Футер сайта</h2>
                    <p className="text-center">© 2024 Все права защищены</p>
                </div>
            )}
        </div>
    )
}