const saveCartItems = (cartItems) => {
    const cart = cartItems.length > 0 ? cartItems : []
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const sumItems = (cartItems) => {
    saveCartItems(cartItems)
    return {
        itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
        total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART':
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
        case 'INCREASE_CART':
            const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[increaseIndex].quantity++
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        case 'DECREASE_CART':
            const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[decreaseIndex].quantity--
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        case 'DELETE_CART':
            const decreaseProduct = state.cartItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                cartItems: [...decreaseProduct],
                ...sumItems(decreaseProduct)
            }

        case 'CLEAR_CART':
            localStorage.removeItem('cart')
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