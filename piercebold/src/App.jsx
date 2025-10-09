import axios from 'axios'
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { PageNotFound } from './pages/PageNotFound404'
import './App.css'
import './index.css'

export function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('/api/cart-items?expand=product').then(response => {
      setCart(response.data)
    })
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      {/* <Route path='checkout' element={<div>Test checkout page</div>} /> */}
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='tracking' element={<TrackingPage cart={cart} />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
