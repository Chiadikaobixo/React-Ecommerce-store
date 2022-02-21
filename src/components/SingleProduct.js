import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { ProductContext } from "../context/product-context";
import '../styles/components/_singleProduct.scss'


const SingelProduct = ({ match, history: { push } }) => {
    const { products } = useContext(ProductContext)
    const { id } = match.params
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const productItem = products.find((product) => Number(product.id) === Number(id))
        if (!productItem) {
            return push('/shop')
        }
        setProduct(productItem)
    })
    if (!product) {
        return null
    }
    const { imageUrl, title, price, description } = product

    return (
        <div className="singleProduct-container">
            <div className="product-image">
                <img src={imageUrl} alt="productimage" />
            </div>
            <div className="product-details">
                <div className="name-price">
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
                <div className="cart-buttons">
                    <button
                        className="button is-white shopxo-btn" id="btn-white-outline"
                    >
                        ADD TO CART
                    </button>
                    <button
                        className="button is-black shopxo-btn" id="btn-white-outline"
                    >
                        CHECKOUT
                    </button>
                </div>
                <div className="product-description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SingelProduct)