import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js'
import { fetchFromAPI } from "../../helpers";
import { UserContext } from "../../context/userContext";


const CustomCheckout = ({ shipping, cartItems, history }) => {
    const { user } = useContext(UserContext)
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState(null)
    const [clientSecret, setClientSecret] = useState(null)
    const [paymentIntentId, setPaymentIntentId] = useState(null)
    const [cards, setCards] = useState(null)
    const [paymentCard, setPaymentCard] = useState('')
    const [saveCard, setSavedCard] = useState(false)
    const stripe = useStripe()
    const element = useElements()

    useEffect(() => {
        const items = cartItems.map(item => ({ price: item.price, quantity: item.quantity }))

        if (user) {
            const savedCards = async () => {
                try {
                    const cardsList = await fetchFromAPI('get-payment-method', {
                        method: 'GET'
                    })
                    setCards(cardsList)
                } catch (error) {
                    console.log(error)
                }
            }
            savedCards()
        }

        if (shipping) {
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
            const customCheckout = async () => {
                const { clientSecret, id } = await fetchFromAPI('create-payment-intent', {
                    body
                })
                setClientSecret(clientSecret)
                setPaymentIntentId(id)
            }
            customCheckout()
        }
    }, [shipping, cartItems])

    const handleCheckout = async () => {
        setProcessing(true)

        let setupIntent
        if (saveCard) {
            setupIntent = await fetchFromAPI('save-payment-method')
        }

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: element.getElement(CardNumberElement)
            }
        })

        if (payload.error) {
            setError(`Payment Failed: ${payload.error.message}`)
        } else {
            if (saveCard && setupIntent) {
                await stripe.confirmCardSetup(setupIntent.client_secret, {
                    payment_method: {
                        card: element.getElement(CardNumberElement)
                    }
                })
                history.push('/success')
            } else {
                history.push('/success')
            }
        }
    }

    const cardHandleChange = (event) => {
        const { error } = event
        setError(error ? error.message : '')
    }

    const savedCardCheckout = async() => {
        setProcessing(true)
        //update the payment intent to include the customers parameter
        const { clientSecret } = await fetchFromAPI('update-payment-intent', {
            body: {paymentIntentId}, method: 'PUT'
        })
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentCard
        })

        if(payload.error){
            setError(`Payment failed: ${payload.error.message}`)
            setProcessing(false)
        }else{
            history.push('/success')
        }
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

    let cardOption

    if (cards) {
        cardOption = cards.map(card => {
            const { card: { brand, last4, exp_month, exp_year } } = card

            return (
                <option key={card.id} value={card.id}>
                    {`${brand}/ **** **** **** ${last4} ${exp_month}/${exp_year}`}
                </option>
            )
        })
        cardOption.unshift(
            <option key='select a card' value=''>
                Select Card
            </option>
        )
    }

    return (
        <div>
            {
                user && (cards && cards.length > 0) &&
                <div>
                    <h4>Pay with saved card</h4>
                    <select
                        value={paymentCard}
                        onChange={e => setPaymentCard(e.target.value)}
                    >
                        {cardOption}
                    </select>
                    <button
                        type="submit"
                        disabled={processing || !paymentCard}
                        className='button is-black shopxo-btn submit saved-card-btn'
                        onClick={() => savedCardCheckout()}
                    >
                        {processing ? 'PROCESSING' : 'PAY WITH SAVED CARD'}
                    </button>
                </div>
            }
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
            {
                user &&
                <div className="save-card">
                    <label>Saved Card</label>
                    <input
                        type='checkbox'
                        checked={saveCard}
                        onChange={e => setSavedCard(e.target.checked)}
                    />
                </div>
            }
            <div className="submit-btn">
                <button
                    disabled={processing}
                    className='button is-black shopxo-btn submit'
                    onClick={() => handleCheckout()}
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