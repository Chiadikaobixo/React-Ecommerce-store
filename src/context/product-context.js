import React, { useState } from "react";
import PRODUCT_DATA from "../products/products";

export const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
    const [products] = useState(PRODUCT_DATA)

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider