import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function AboutProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function getProduct() {
            const resp = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await resp.json()
            setProduct(data)
        }
        getProduct()
    }, [id])

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Рейтинг: {product.rating}</p>
        </div>
    )
}