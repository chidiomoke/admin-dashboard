import React from 'react'
// import pic1 from './assets/images/bobo.jpg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Layout from './Components/shared/Layout'
import Products from './Components/Products'
import Orders from './Components/Orders'
import Customers from './Components/Customers'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
