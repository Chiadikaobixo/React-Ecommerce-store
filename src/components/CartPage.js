import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import '../styles/components/_cartPage.scss'

const CartPage = () => {
    const { cartItems, itemCount, total } = useContext(CartContext)
    return (
        <div>
            <h1>Cart item</h1>
            {
                cartItems.length === 0 ? <div className="empty-cart">Your cart is empty</div> :
                    <div>
                        <div className="cart-page">
                            <div className="cart-item-container">
                                {
                                    cartItems.map(item => <CartItem {...item} key={item.id} />)
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CartPage