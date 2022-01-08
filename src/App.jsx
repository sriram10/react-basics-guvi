
import React, { useState } from 'react'
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import ProductItem from './components/ProductItem/ProductItem';
import ProductsList from './components/ProductsList/ProductsList';
// JSX - Javascript XML

const products = [
  {
    title: 'Apple',
    image: 'https://rukminim1.flixcart.com/image/300/300/ksru0sw0/screen-guard/back-screen-guard/v/z/x/v2109bkcam-desibuzz-original-imag69mcgjysvwzt.jpeg?q=70',
    desc: 'MacBook'
  },
  {
    title: 'Windows',
    image: 'https://rukminim1.flixcart.com/image/300/300/km0x5zk0/microphone/j/9/z/k678-fifine-original-imagfyn8nhkezmzg.jpeg?q=70',
    desc: 'Microsoft'
  },
  {
    title: 'Linux',
    image: 'https://rukminim1.flixcart.com/image/300/300/j98t0280/watch/h/9/h/3165nl01-fastrack-original-imaez34fxhsffcmz.jpeg?q=70',
    desc: 'OSS'
  },
  {
    title: 'Android',
    image: 'https://rukminim1.flixcart.com/image/300/300/ksc46fk0/fabric/v/m/j/no-2-35-m-unstitched-shankar01-trijal-fab-original-imag5xd6gfptxtqp.jpeg?q=70',
    desc: 'Mobile'
  },
]

function App() {
  const [cartItems, setCartItems] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

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

  const deleteCartItem = (item) => {
    setCartItems((oldCartItems) => {
      const result = oldCartItems.filter(d => {
        if(d.title === item.title) {
          return false;
        }
        return true;
      })

      return result;
    })
  }

  return (
    <div>
      <Header
        cartListItems={cartItems}
        onLoginClick={() => setShowLoginModal(true)}
        onCartClick={() => setShowModal(true)}
        />
      <Modal title='Your Cart!' showFooter open={showModal} onClose={() => setShowModal(false)}>
        {
          cartItems.length ? (
            <div>
              <h4>List of Products</h4>
              <ul>
                {
                  cartItems.map((d, index) => {
                    return <li key={index}>
                      <ProductItem
                        title={d.title}
                        desc={d.desc}
                        count={d.count}
                        image={d.image}
                        deleteItem={deleteCartItem}
                      />
                      </li>
                  })
                }
              </ul>
            </div>
          ) : (
            <div className='text-center p-4'>
              <h1 className='text-lg'>Continue Shopping!</h1>
            </div>
          )
        }
      </Modal>
      <Modal title='Login' showFooter open={showLoginModal} onClose={() => setShowLoginModal(false)}>
        <h1>Login Form</h1>
      </Modal>
      <ProductsList title='New Deals!' subtitle='only for you' data={products} onAdd={addToCart} />
      <ProductsList title='Mobiles!' data={products} onAdd={addToCart} />
      <ProductsList title='Laptops!' onAdd={addToCart} />
      <ProductsList title='Recents' data={products} onAdd={addToCart} />
    </div>
  );
}

export default App;
