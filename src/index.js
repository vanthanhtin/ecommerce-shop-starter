import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//  sidebar provider
import SidebarProvider from './contexts/SidebarContext';
//  cart provider
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </CartProvider>
  </SidebarProvider>
);
