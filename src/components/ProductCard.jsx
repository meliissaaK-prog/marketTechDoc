import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import ProductItem from "./ProductItem"

export default function ProductCard() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const resp = await fetch('https://dummyjson.com/products')
            const data = await resp.json()
            setProducts(data.products)
        }
        getProducts()
    }, [])

    function deleteProduct(productId) {
        setProducts(products.filter(product => product.id !== productId))
    }

    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-5">Каталог товаров</h1>
            
            <div className="grid grid-cols-5 gap-4">
                {products.map((product) => (
                    <ProductItem 
                        key={product.id} 
                        product={product} 
                        onDelete={() => deleteProduct(product.id)} 
                    />
                ))}
            </div>
        </div>
    )
}