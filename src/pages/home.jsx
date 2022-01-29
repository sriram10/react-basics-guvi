
import React, { useState } from 'react'
import Deals from '../components/Deals/Deals';
import ProductsList from '../components/ProductsList/ProductsList';
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

function HomePage(props) {
  return (
    <div>
      <Deals />
      <ProductsList title='New Deals!' subtitle='only for you' data={products} onAdd={props.addToCart} />
      <ProductsList title='Mobiles!' data={products} onAdd={props.addToCart} />
      <ProductsList title='Laptops!' onAdd={props.addToCart} />
      <ProductsList title='Recents' data={products} onAdd={props.addToCart} />
    </div>
  );
}

export default HomePage;
