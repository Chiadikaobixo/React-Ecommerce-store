import React, { useContext } from "react";
import { isInCart } from "../helpers";
import { CartContext } from "../context/cartContext";
import { withRouter } from "react-router-dom";
import '../styles/components/_futuredProduct.scss'

const FeaturedProduct = (props) => {
    const { title, imageUrl, price, id, history, description } = props
 
    const product = { title, imageUrl, price, id, description } 

    const { addProduct, cartItems, increaseProduct } = useContext(CartContext)

    return (
        <div className="featured-product">
            <div className="featured-image"
                onClick={() =>
                    history.push(`/product/${id}`)
                }
            >
                <img src={imageUrl} alt="product" />
            </div>
            <div className="name-price">
                <h3>{title}</h3>
                <p>$ {price}</p>
                {
                    !isInCart(product, cartItems) &&
                    <button
                        className="button is-black shopxo-btn"
                        onClick={() => addProduct(product)}
                    >
                        ADD TO CART
                    </button>
                }
                {
                    isInCart(product, cartItems) &&
                    <button
                        className="button is-white shopxo-btn"
                        id="btn-white-outline"
                        onClick={() => increaseProduct(product)}
                    >
                        ADD MORE
                    </button>
                }

            </div>
        </div>
    )
}

export default withRouter(FeaturedProduct)