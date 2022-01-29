import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/about";
import HomePage from "./pages/home"
import TermsPage from "./pages/terms";

const App = () => {
  const [cartItems, setCartItems] = useState([])

  // { title: 'something' }
  const addToCart = item => {
    console.log('Add 2 Cart > ', item)
    setCartItems((oldStateValue) => {
      console.log('Old State >', oldStateValue)
      let updated = false;
      
      const newCartList = oldStateValue.map((d) => {
        let count = d.count || 1;
        if(item.title === d.title) {
          count++;
          updated = true;
        }

        return { ...d, count }
      })

      if(!updated) {
        newCartList.push({ ...item, count: 1 })
      }
      return newCartList;
    })
  }
  return (
    <Layout cartItems={cartItems} updateCartItems={setCartItems}>
      <Routes>
        <Route path="/" element={<HomePage cartItems={cartItems} addToCart={addToCart} />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  )
}

export default App;

/**
 * 1. Multiple URLs
 * 2. Different Content for unique url
 */