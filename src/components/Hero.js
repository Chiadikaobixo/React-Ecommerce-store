import React from "react";
import { Link } from 'react-router-dom'
import '../styles/components/_hero.scss'

const Hero = () => (
    <section className="hero is-large is-info hero-image">
        <div className="hero-body">
            <div className="container">
                <h1 className="hero-title">
                    Wellcome to SHOPXO
                </h1>
                <div className="shop-now-btn">
                    <button className="button is-black" id="shop-now">
                        ShopXo
                    </button>
                </div>
            </div>
        </div>
    </section>
)

export default Hero