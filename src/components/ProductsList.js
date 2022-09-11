import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsList({ products }) {
  return (
   
    //<div className="container bg-slate-300 mx-auto p-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10 object-fill">
    <div className='container mx-auto p-10 grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  gap-10 object-fill'  > {/* gap space ii newan row w column akana */}
    {products.map((product, index) => {
      return <ProductCard product={product}  key={index} />;
    })}
  </div>

  )
}
