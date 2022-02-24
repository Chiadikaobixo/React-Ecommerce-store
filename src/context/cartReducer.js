export const sumItems = (cartItems) => {
    return {
        itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
        total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }
        case 'INCREASE_PRODUCT':
            const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[increaseIndex].quantity++
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        case 'DECREASE_PRODUCT':
            const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[decreaseIndex].quantity--
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        case 'DELETE_PRODUCT':
            const decreaseProduct = state.cartItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                cartItems: [...decreaseProduct],
                ...sumItems(decreaseProduct)
            }

        case 'CLEAR_CART':
            return{
                cartItems: [],
                itemCount: 0,
                total: 0
            }
        default:
            return state
    }
}

export default cartReducer