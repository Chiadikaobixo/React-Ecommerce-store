import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import { withRouter } from "react-router-dom"


const SuccessPage = ({ history }) => {
    const { clearCart } = useContext(CartContext)
    useEffect(clearCart, [])
    
    return (
        <div className="checkout">
            <h1>Thanks for your patronage</h1>
            <p>A confirmation email will be sent to you
                immediately your order has been processed
            </p>
            <div>
                <button
                    className="button is-black shopxo-btn submit"
                    onClick={() => history.push('/shop')}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}

export default withRouter(SuccessPage)