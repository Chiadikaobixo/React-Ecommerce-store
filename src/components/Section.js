import React from "react";
import { withRouter } from "react-router-dom";
import tShirt from '../assets/IMG-1250.JPG'
import '../styles/components/_section.scss'

const Section = ({ history }) => (
    <div className="main-section-container">
        <div className="main-section-middle">
            <div className="ms-m-image">
                <img src={tShirt} alt="t shirt" />
            </div>
            <div className="ms-m-description">
                <h2>Designed for fashion. Crafted for comfort</h2>
                <p>
                    we make good product
                </p>
                <button className="button is-black id=shop-now"
                    onClick={() => history.push('/store/1')}>
                    T-SHIRT
                </button>
            </div>
        </div>
    </div>
)

export default withRouter(Section)