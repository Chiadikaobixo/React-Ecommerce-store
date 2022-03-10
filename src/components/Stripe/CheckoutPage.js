import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import ShippingAddress from "../customCheckout.js/ShippingAddress";
import "../../styles/components/_checkoutPage.scss"

const CheckoutPage = () => {
    const { itemCount, total } = useContext(CartContext)
    const [ shipping, setShipping] = useState(null)
    const addressShown = {
        display: (shipping ? 'none' : 'block')
    }
    return (
        <div className="checkout">
            <h2>Checkout Summary</h2>
            <h3>{`Total Items: ${itemCount}`}</h3>
            <h4>{`Amount To Pay $${total}`}</h4>
            <div style={addressShown}>
            <ShippingAddress  setShipping={setShipping}/>
            </div>
        </div>
    )
}

export default CheckoutPage