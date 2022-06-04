import { getProducts } from "./asyncmock"
import ItemList from "./ItemList/ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div>
            <h1 style={{ color: 'gold' }}>{props.greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer