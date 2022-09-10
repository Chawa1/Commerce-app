import React from 'react'

export default function ProductCard({ product }) {
  return ( 
  <div className='col-span-3 bg-white p-6 '>  
  
  <img 
  src={product.image} 
  alt='prodduct ' 
  className='h-60 w-full object-contain'/> {/* object-contain boi product aka hamwi darkawet */}
  <h2 className='text-xl font-medium mt-6'> {product.title}</h2>
  <p className='text-base text-gray-500'> {product.description}</p>
  </div>
  );
}
