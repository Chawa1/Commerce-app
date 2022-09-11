import React from 'react';
import { delimiter } from '../utils/delimiter';
import {Link} from 'react-router-dom';

export default function ProductCard({ product }) {
  return ( 
  <Link to={`/products/${product.id}`} className='rounded-lg bg-white p-4 '>  
  
  <img 
  src={product.image} 
  alt='prodduct ' 
  className='h-60 w-full object-contain'/> {/* object-contain boi product aka hamwi darkawet */}
  <h2 className='text-l font-medium mt-6 mb-6'> {delimiter(product.title, 30)}</h2>
  <p className='text-base text-gray-500  '> 
  {delimiter(product.description, 70)}
  </p>

  {/* ama bo bashi xwaraway cartakaya price w jorakai */}
  <div className='flex justify-between mt-8'>
<p className='text-xl text-green-700 '>{product.price}$</p>

<button className='border border-indigo-600 rounded-xl text-indigo-600 text-xs p-1'>{product.category.toUpperCase()}</button>

  </div>
  </Link>
  );
}