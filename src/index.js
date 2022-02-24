import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import ProductProvider from './context/product-context'
import CartContextProvider from './context/cartContext'
import AdminContextProvider from './context/adminContext'

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      <AdminContextProvider>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </AdminContextProvider>
    </ProductProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();