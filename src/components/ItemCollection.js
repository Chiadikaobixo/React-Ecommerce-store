import React, { useContext } from "react";
import { ProductContext } from "../context/product-context";
import FeaturedProduct from "./FeaturedProduct";
import '../styles/components/_itemCollection.scss'

const ItemCollection = () => {
    const { products } = useContext(ProductContext)
    const productItems = products.map(product => (
        <FeaturedProduct {...product} key={product.id} />
    ))

    return (
        <div className="item-collection-container">
            <h2 className="item-collection-title">Item Collection</h2>
            <div className="item-collection-list">
                {productItems}
            </div>
        </div>
    )
}
export default ItemCollection