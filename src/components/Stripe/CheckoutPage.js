import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import StripeCheckout from "./StripeCheckout";
import "../../styles/components/_checkoutPage.scss"

const CheckoutPage = () => {
    const { itemCount, total } = useContext(CartContext)
    return (
        <div className="checkout">
            <h2>Checkout Summary</h2>
            <h3>{`Total Items: ${itemCount}`}</h3>
            <h4>{`Amount To Pay $${total}`}</h4>
            <StripeCheckout />
        </div>
    )
}

export default CheckoutPage