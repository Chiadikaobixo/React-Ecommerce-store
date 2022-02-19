import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Shop from "../components/Shop";
import SignUp from "../components/SignUp";
import Items from "../components/Items";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
    <BrowserRouter >
        <div>
        <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/shop" component={Shop} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/Items" component={Items} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter