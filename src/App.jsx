import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { GlobalProvider } from './context/globalContext';
import AboutPage from "./pages/about";
import DealInfoPage from './pages/dealInfo';
import HomePage from "./pages/home"
import ProductDetailPage from './pages/productDetail';
import ProductsPage from './pages/products';
import TermsPage from "./pages/terms";

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const isMounted = useRef(false);

  useEffect(() => {
    if(isMounted.current) {
      localStorage.setItem('__CART__', JSON.stringify(cartItems))
    }
  }, [cartItems])
  
  useEffect(() => {
    const ls = localStorage.getItem('__CART__');
    const d = JSON.parse(ls)
  
    if(cartItems?.length === 0 && d?.length) {
      setCartItems(d)
    }

    isMounted.current = true;
  }, [])

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

  const updateCart = (productTitle, newCount) => {
    setCartItems(oldStateValue => {
      return oldStateValue.map(d => {
        if(productTitle === d.title) {
          d.count = newCount;
        }
        return d;
      })
    })
  }

  return (
    <GlobalProvider value={{ cartItems, addToCart, updateCart }}>
      <Layout updateCartItems={setCartItems}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/deal/:dealId" element={<DealInfoPage />} />
          <Route path="/product/:productTitle" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
    </GlobalProvider>
  )
}

export default App;

/**
 * Global Context - 
 * For every Change on data update localstorage
 * After refresh Get data from localstorage and update the context data
 * 
 */