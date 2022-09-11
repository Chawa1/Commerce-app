//we use this api https://fakestoreapi.com/docs

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

import ProductsList from '../components/ProductsList';

import LoadingSpinner from '../components/LoadingSpinner';

export default function Products( ) {

  const [products, setProducts] = useState([]); //katek ka la api datakan garayawa lerada save' store akain 
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {  //categories akan la api aka waragrin 
    axios
      .get(`https://fakestoreapi.com/products`) //dawai dataka akain
      .then((response) => { // katek dataka garayawa

        console.log('list of products:' ,response.data);
        setProducts(response.data); //dataka la setProduct da store abet
        setIsLoading(false);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(isLoading){
    <LoadingSpinner/>
      }

  return (

    <MainLayout>
    {/*   {JSON.stringify(products)}  */}

    <ProductsList products = {products}/>
    </MainLayout>

  )
}
