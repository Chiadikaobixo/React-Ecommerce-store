import React from "react";
import { withRouter } from "react-router-dom";

const CanceledPage = ({ history }) => (
    <div className="checkout">
        <h1>Payment failed</h1>
        <p>Payment was not Successfull</p>
        <div>
            <button
                className="button is-black shopxo-btn submit"
                onClick={() => history.push('/shop')}
            >
                Continue Shopping
            </button>
        </div>
    </div>
)

export default withRouter(CanceledPage)