import React, { useContext } from "react";
import cartIcon from '../../assets/IMG-1243.JPG'
import { CartContext } from "../../context/cartContext";
import { withRouter } from "react-router-dom";
import '../../styles/components/_cartIcon.scss'

const CartIcon = ({history}) => {
    const { itemCount } = useContext(CartContext)
    return (
        <div className="cart-container">
            <img
                src={cartIcon} alt="cart-icon"
                onClick={() => {
                    history.push('/cart')
                }}
            />
            {
                itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null
            }
        </div>
    )
}

export default withRouter(CartIcon)