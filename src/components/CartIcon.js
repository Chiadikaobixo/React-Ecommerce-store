import React from "react";
import cartIcon from '../assets/IMG-1243.JPG'
import '../styles/components/_cartIcon.scss'

const CartIcon = () => (
    <div className="cart-container">
    <img src={cartIcon} alt="cart-icon" />
    <span className="cart-count">5</span>
    </div>
)

export default CartIcon