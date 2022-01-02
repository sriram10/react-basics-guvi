import React, { useEffect } from 'react';
import './Card.css'

// { title: 'Apple', desc: 'some content', imageSource: 'https://...' }

function Card(props){
  useEffect(() => {
    return () => {
      // will trigger while un-mounting
      console.log('Removed Card >', props.title)
    }
  }, []);

  return (
    <div className='card-wrapper'>
      <img src={props.imageSource} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <button onClick={() => { props.onAdd({ title: props.title }) }}>Add to Cart</button>
    </div>
  )
}

export default Card;
