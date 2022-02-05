import React, { useContext, useEffect, useState } from 'react';
import PrimaryButton from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import { GlobalContext } from '../context/globalContext';
import fetchApi from '../utils/fetchApi';

/**
 * Goal:
 * 1. Accessing REST API in all browers and even in older versions
 * 2. axios object provides abstraction for all methods
 * 3. axios.get('')
 * 
 */

const ProductsPage = () => {
  const data = useContext(GlobalContext)
  const [showModal, setShowModal] = useState(false)
  const [products, setProducts] = useState([])
  const [reviews, setReviews] = useState([])
  const [formData, setFormData] = useState({})

  useEffect(() => {
    getProducts();
    fetchApi.get('/reviews')
      .then(res => {
        setReviews(res.data);
      })
      .catch(e => {
        console.log('Products Page > ', e)
      })
  }, [])

  const getProducts = () => {
    fetchApi.get('/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(e => {
        console.log('Products Page > ', e)
      })
  }

  const onInputChange = e => {
    setFormData(oldState => {
      return {
        ...oldState,
        [e.target.name]: e.target.value
      }
    })
  }

  const onAddProduct = () => {
    if(formData.name) {
      fetchApi.post('/products', {
        ...formData
      })
      .then(res => {
        getProducts();
        setShowModal(false)
        setFormData({})
      })
      .catch(e => {
        console.log('Product Add Err >', e)
      })
    }
  }

  const onDeleteProduct = itemId => {
    fetchApi.delete(`/products/${itemId}`)
      .then(res => {
        console.log(res);
        getProducts();
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div>
      <h1>Products Page</h1>

      <PrimaryButton onClick={() => setShowModal(true)}>
        Add Product
      </PrimaryButton>
      <div>
        {
          products.map(item => {
            return (
              <div key={item.id} className='inline-block p-5'>
                <img src={item.image} style={{ height: 50, width: 'auto' }} />
                <p>{item.title}</p>
                <p>{item.desc}</p>
                <PrimaryButton onClick={() => onDeleteProduct(item.id)}>🗑 Delete</PrimaryButton>
              </div>
            )
          })
        }
        {
          reviews.map(item => {
            return <div key={item.id}>{item.comments}</div>
          })
        }
      </div>
      <Modal title='Add Product' open={showModal}>
        <div className='flex direction-column'>
          <input className='border' type={'text'} value={formData.name} name='name'  placeholder='Name' onChange={onInputChange} />
          <input className='border' type={'text'} value={formData.desc} name='desc'  placeholder='Desc' onChange={onInputChange} />
          <input className='border' type={'text'} value={formData.image} name='image' placeholder='Image url'  onChange={onInputChange} />
          <PrimaryButton onClick={onAddProduct}>Add</PrimaryButton>
        </div>
        <PrimaryButton onClick={() => setShowModal(false)}>
          Close
        </PrimaryButton>
      </Modal>
    </div>
  )
}

export default ProductsPage;
