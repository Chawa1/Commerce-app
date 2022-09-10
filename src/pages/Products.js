//we use this api https://fakestoreapi.com/docs

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

import ProductCard from '../components/ProductCard';
import ProductsList from '../components/ProductsList';

export default function Products( ) {

  const [products, setProducts] = useState([]); //katek ka la api datakan garayawa lerada save' store akain 
  const [isLoading, setIsLoading] = useState(true);


  const nextButton = (
    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
  const prevButton = (
    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  );


  useEffect(() => {  //categories akan la api aka waragrin 
    axios
      .get('https://fakestoreapi.com/products') //dawai dataka akain
      .then((response) => { // katek dataka garayawa

        console.log('list of products:' ,response.data);
        setProducts(response.data); //dataka la setProduct da store abet
        setIsLoading(false);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

    <MainLayout>
    {/*   {JSON.stringify(products)}  */}

    <ProductsList products={products}/>
    </MainLayout>

  )
}
