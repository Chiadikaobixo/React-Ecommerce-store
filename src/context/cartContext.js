import React, { useReducer } from "react";
import cartReducer, {sumItems} from "./cartReducer";

export const CartContext = React.createContext()

const cartFromLocalStorage = localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart')) : []

const initailState = {
    cartItems: cartFromLocalStorage,
    ...sumItems(cartFromLocalStorage)
}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initailState)

    const addCart = (product) => dispatch({
        type: 'ADD_CART',
        payload: product
    })

    const increaseCart = (product) => dispatch({
        type: 'INCREASE_CART',
        payload: product
    })

    const decreaseCart = (product) => dispatch({
        type: 'DECREASE_CART',
        payload: product
    })

    const deleteCart = (product) => dispatch({
        type: 'DELETE_CART',
        payload: product
    })
    
    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })
    const contextValue = {
        ...state,
        addCart,
        increaseCart,
        decreaseCart,
        deleteCart,
        clearCart
    }

    return (
        <CartContext.Provider value={ contextValue }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider