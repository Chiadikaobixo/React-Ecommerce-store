import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import ProductProvider from './context/product-context'

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      <AppRouter />
    </ProductProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();