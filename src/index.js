import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import ProductProvider from './context/product-context';
import CartContextProvider from './context/cartContext';
import AdminContextProvider from './context/adminContext';
import UserContextProvider from './context/userContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      <AdminContextProvider>
        <CartContextProvider>
          <Elements stripe={stripePromise}>
            <UserContextProvider>
              <AppRouter />
            </UserContextProvider>
          </Elements>
        </CartContextProvider>
      </AdminContextProvider>
    </ProductProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();