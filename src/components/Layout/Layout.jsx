import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/globalContext';
import Login from '../Forms/Login';
import Signup from '../Forms/Signup';
import Header from "../Header/Header"
import Modal from "../Modal/Modal";
import ProductItem from '../ProductItem/ProductItem';

const Layout = (props) => {
  const { cartItems } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const deleteCartItem = (item) => {
    props.updateCartItems((oldCartItems) => {
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
      <Modal title={showLogin ? 'Login' : 'Signup'} showFooter open={showLoginModal} onClose={() => setShowLoginModal(false)}>
        {
          showLogin ? <Login /> : <Signup />
        }

        {/* Sign Up/Login Option */}
        {
          showLogin ? (
            <p className='text-grey'>Don't have an account? <span onClick={() => setShowLogin(false)}>Sign up here.</span></p>
          ) : (
            <p className='text-grey'>Already have an account? <span onClick={() => setShowLogin(true)}>Login here.</span></p>
          )
        }
      </Modal>

      {
        props.children
      }
    </div>
  )
}

export default Layout