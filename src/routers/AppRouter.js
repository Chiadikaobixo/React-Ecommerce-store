import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Shop from "../components/Shop";
import SignUp from "../components/SignUp";
import NotFoundPage from "../components/NotFoundPage";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";
import CartPage from "../components/CartPage";
import CheckoutPage from "../components/Stripe/CheckoutPage";
import AddProductForm from "../components/AddProductForm"
import Success from "../components/Stripe/Success";
import Canceled from "../components/Stripe/Canceled";

const AppRouter = () => (
    <BrowserRouter >
        <div>
        <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/shop" component={Shop} />
                <Route path="/product/:id" component={SingleProduct} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/cart" component={CartPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/addproduct" component={AddProductForm} />
                <Route path="/success" component={Success} />
                <Route path="/canceled" component={Canceled} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter