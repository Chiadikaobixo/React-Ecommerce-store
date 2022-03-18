import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { auth } from "../firebase/firebase";
import { UserContext } from "../context/userContext";
import CartIcon from "./cart/CartIcon";
import '../styles/components/_header.scss'

const Header = () => {
  const { user } = useContext(UserContext)
  console.log('user', user)
  return (
    <header>
      <nav className="nav-menu container">
        <div className="logo"><Link to="/">SHOPXO</Link></div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop"  >Shop</Link></li>
          {
            !user ?
              <li><Link to="/login" >Login</Link></li> :
              <li onClick={() => auth.signOut()}>Logout</li>
          }
          {
            !user &&
            <li><Link to="/signup" >SignUp</Link></li>
          }
          <li><CartIcon /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header