import React from "react";
import { Link } from 'react-router-dom'
import CartIcon from "./CartIcon";
import '../styles/components/_header.scss'

const Header = () => (
  <header>
    <nav className="nav-menu container">
      <div className="logo"><Link to="/">SHOPXO</Link></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop"  >Shop</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup" >SignUp</Link></li>
        <li><CartIcon /></li>
      </ul>
    </nav>
  </header>
)

export default Header