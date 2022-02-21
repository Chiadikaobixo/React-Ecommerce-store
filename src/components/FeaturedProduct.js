import React from "react";
import { withRouter } from "react-router-dom";
import '../styles/components/_futuredProduct.scss'

const FeaturedProduct = (product) => {
    const { title, imageUrl, price, id, history} = product
    
    return (
        <div className="featured-product">
            <div className="featured-image" onClick={() => 
              history.push(`/product/${id}`)
            }>
                <img src={imageUrl} alt="product" />
            </div>
            <div className="name-price">
                <h3>{title}</h3>
                <p>$ {price}</p>
                <button className="button is-black shopxo-btn">ADD TO CART</button>
            </div>
        </div>
    )
}

export default withRouter(FeaturedProduct)