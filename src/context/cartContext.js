import React, { useReducer } from "react";
import cartReducer from "./cartReducer";

export const CartContext = React.createContext()

const initailState = {
    cartItems: [],
    itemCount: 0,
    total: 0
}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initailState)

    const addProduct = (product) => dispatch({
        type: 'ADD_PRODUCT',
        payload: product
    })

    const increaseProduct = (product) => dispatch({
        type: 'INCREASE_PRODUCT',
        payload: product
    })

    const contextValue = {
        ...state,
        addProduct,
        increaseProduct
    }

    return (
        <CartContext.Provider value={ contextValue }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider