import React, { useReducer } from "react";
import adminReducer from "./adminReducer";

export const AdminContext = React.createContext()

const initailState = {
    product: {}
}

const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(adminReducer, initailState)

    const postProduct = (product) => dispatch({
        type: 'POST_PRODUCT',
        payload: product
    })

    const contextValue = {
        ...state,
        postProduct
    }

    return (
        <AdminContext.Provider value={contextValue}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider