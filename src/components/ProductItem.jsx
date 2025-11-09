import { NavLink } from "react-router-dom"
import Stars from "./Stars"

export default function ProductItem({ product, onDelete }) {
    return (
        <div 
            className="border border-gray-300 p-4 rounded cursor-pointer" 
            onDoubleClick={onDelete} 
        >
            <img 
                src={product.thumbnail} 
                alt={product.title}
                className="w-full h-[250px] object-cover mb-3"
            />
            
            <NavLink to={`/product/${product.id}`}>
                <h3 className="font-bold text-lg">{product.title}</h3>
            </NavLink>
            
            <p className="text-green-600 font-semibold">${product.price}</p>
            <Stars rating={product.rating}/>
        </div>
    )
}