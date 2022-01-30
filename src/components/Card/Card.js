import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/globalContext';
import { HomeContext } from '../../context/homeContext';
import './Card.css'

// { title: 'Apple', desc: 'some content', imageSource: 'https://...' }

function Card(props){
  const { addToCart } = useContext(GlobalContext);
  const { title } = useContext(HomeContext);
  useEffect(() => {
    return () => {
      // will trigger while un-mounting
      console.log('Removed Card >', props.title)
    }
  }, []);

  return (
    <div className='card-wrapper'>
      <img src={props.imageSource} />
      <h3>{title} - {props.title}</h3>
      <p>{props.desc}</p>
      <button onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({ title: props.title, image: props.imageSource, desc: props.desc })
      }}>Add to Cart</button>
    </div>
  )
}

export default Card;
