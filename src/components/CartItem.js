import React, { useContext } from "react";
import { PlusCirleIcon, TrashIcon, MinusCircleIcon } from "./Icons";
import { CartContext } from "../context/cartContext";

const CartItem = (product) => {
    const { title, imageUrl, price, quantity } = product

    const { increaseProduct, decreaseProduct, deleteProduct } = useContext(CartContext)

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
                onClick={() => increaseProduct(product)}
                >
                    <PlusCirleIcon width="20px" />
                </button>
                {
                    quantity === 1 &&
                    <button 
                    className="btn-trash"
                    onClick={() => deleteProduct(product)}
                    >
                        <TrashIcon width="20px" />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button 
                    className="btn-minus"
                    onClick={() => decreaseProduct(product)}
                    >
                        <MinusCircleIcon width="20px" />
                    </button>
                }
            </div>
        </div>
    )
}

export default CartItem