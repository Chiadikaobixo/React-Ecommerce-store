import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js'
import { FetchFromAPI } from "../../helpers";

const CustomCheckout = ({ shipping, cartItems, history}) => {
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState(null)
    const [clientSecret, setClientSecret] = useState(null)
    const stripe = useStripe()
    const element = useElements()

    useEffect(() => {
        const items = cartItems.map(item => ({price: item.price, quantity: item.quantity}))
        if(shipping){
            const body = {
                cartItems: items,
                shipping: {
                    name: shipping.name,
                    address: {
                        line1: shipping.address
                    }
                },
                description: 'payment intent for shopxo',
                receipt_email: shipping.email
            }
            const customCheckout = async() => {
                const { clientSecret } = await FetchFromAPI('create-payment-intent', {
                   body
                })
                setClientSecret(clientSecret)
            }
            customCheckout()
        }
    }, [shipping, cartItems])

    const handleCheckout = async () => {
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: element.getElement(CardNumberElement)
            }
        })
        if(payload.error){
            setError(`Payment Failed: ${payload.error.message}`)
        }else{
            history.push('/success')
        }
    }

    const cardHandleChange = (event) => {
        const { error } = event
        setError(error ? error.message : '')
    }

    const cardStyle = {
        style: {
            base: {
                color: '#000',
                fontFamily: 'Roboto, sans-serif',
                fontSmoothing: 'antialised',
                fontSize: '16px',
                '::placeholder': {
                    color: '#606060'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        }
    }
    return (
        <div>
            <h4>Enter Payment Details</h4>
            <div className="stripe-card">
                <CardNumberElement
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}
                />
            </div>
            <div className="stripe-card">
                <CardExpiryElement
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}
                />
            </div>
            <div className="stripe-card">
                <CardCvcElement
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}
                />
            </div>
            <div className="submit-btn">
                <button
                    disabled={processing}
                    className='button is-black shopxo-btn submit'
                    onClick={() => handleCheckout() }
                >
                    {processing ? 'PROCESSING' : 'PAY'}
                </button>
            </div>
            <div>
            {error && (<p className="error-message">{error}</p>)}
            </div>
        </div>
    )
}

export default withRouter(CustomCheckout)