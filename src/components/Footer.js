import React from "react";
import '../styles/components/_footer.scss'

const Footer = () => {
    const year = new Date().getFullYear()
    return(
        <div className="footer">
        {year}  SHOPXO
        </div>
    )
}

export default Footer