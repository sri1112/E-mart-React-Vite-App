import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { CartProvider } from './stores/context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<HashRouter>
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
</HashRouter>
)
//create by srikar aletis