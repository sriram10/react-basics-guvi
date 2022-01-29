import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Deals = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(response => {
        setData(response.slice(0, 10))
      })
      .catch(e => {
        console.log(e)
      });

  }, [])

  return (
    <div className='p-2'>
      <h2>Deals</h2>
      <div className='p-1 flex'>
        {
          data.map(item => (
            <Link to={`/deal/${item.id}?type=deals-page`}>
              <div>
                <img src={item.thumbnailUrl} />
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Deals;
