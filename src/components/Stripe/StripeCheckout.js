import React, { useContext, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { CartContext } from "../../context/cartContext";
import { FetchFromAPI } from "../../helpers";

const StripeCheckout = () => {
    const [email, setEmail] = useState('')
    const { cartItems } = useContext(CartContext)
    const stripe = useStripe()

    const handleGuestCheckout = async (e) => {
        e.preventDefault()
        const line_items = cartItems.map(item => {
            return {
                quantity: item.quantity,
                price_data: {
                    currency: 'usd',
                    unit_amount: item.price * 100,
                    product_data: {
                        name: item.title,
                        description: item.description,
                        images: [item.imageUrl],
                    }
                }
            }
        })

        const response = await FetchFromAPI('create-checkout-session', {
            body: { line_items, customer_email: email }
        })

        const { sessionId } = response
        const { error } = await stripe.redirectToCheckout({
            sessionId
        })

        if (error) {
            console.log('error:', error)
        }
    }

    return (
        <form onSubmit={handleGuestCheckout} >
            <div>
                <input
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="shopxo-input"
                />
            </div>
            <div className="submit-btn">
                <button type="submit" className="button is-black shopxo-btn submit">
                    Checkout
                </button>
            </div>
        </form>
    )
}

export default StripeCheckout