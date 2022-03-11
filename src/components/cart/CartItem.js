import React, { useContext } from "react";
import { PlusCirleIcon, TrashIcon, MinusCircleIcon } from "./Icons";
import { CartContext } from "../../context/cartContext";

const CartItem = (product) => {
    const { title, imageUrl, price, quantity } = product

    const { increaseCart, decreaseCart, deleteCart } = useContext(CartContext)

    return (
        <div className="cart-item">
            <div className="cart-image">
                <img src={imageUrl} alt="product" />
            </div>
            <div className="name-price">
                <h4>{title}</h4>
                <p>$ {price}</p>
            </div>
            <div className="quantity">
                <p>{`Quantity: ${quantity}`}</p>
            </div>
            <div className="btns-container">
                <button 
                className="btn-plus"
                onClick={() => increaseCart(product)}
                >
                    <PlusCirleIcon width="20px" />
                </button>
                {
                    quantity === 1 &&
                    <button 
                    className="btn-trash"
                    onClick={() => deleteCart(product)}
                    >
                        <TrashIcon width="20px" />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button 
                    className="btn-minus"
                    onClick={() => decreaseCart(product)}
                    >
                        <MinusCircleIcon width="20px" />
                    </button>
                }
            </div>
        </div>
    )
}

export default CartItem