import React from "react";
import { withRouter } from "react-router-dom";

const ShowCaseText = ({history}) => {
    return (
        <div className="showcaseText">
            <div className="showCaseInfo">
                <h2 className="text-center text-capitalize">ShopXo</h2>
                <p>Wellcome to ShopXo! Your home of fashion
                </p>

                <div className="shop-now-btn">
                    <div className="shop-now-btn">
                        <button className="button is-black" id="shop-now"
                        onClick={() => history.push('/shop')}
                        >
                        ShopXo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ShowCaseText)