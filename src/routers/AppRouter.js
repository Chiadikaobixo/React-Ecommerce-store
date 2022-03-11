import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../components/Header";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import ShopPage from "../components/pages/ShopPage";
import SignUpPage from "../components/pages/SignUpPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import Footer from "../components/Footer";
import SingleProductPage from "../components/pages/SingleProductPage";
import CartPage from "../components/cart/CartPage";
import CheckoutPage from "../components/pages/CheckoutPage";
import AddProductForm from "../components/forms/AddProductForm"
import SuccessPage from "../components/pages/SuccessPage";
import CanceledPage from "../components/pages/CanceledPage";

const AppRouter = () => (
    <BrowserRouter >
        <div>
        <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/product/:id" component={SingleProductPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/addproduct" component={AddProductForm} />
                <Route path="/success" component={SuccessPage} />
                <Route path="/canceled" component={CanceledPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter