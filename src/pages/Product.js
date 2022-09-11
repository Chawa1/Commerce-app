import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Product() {
  let { id } = useParams();

  const [product, setProduct] = useState([]);  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {  
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => { 

        console.log('list of products:' ,response.data);
        setProduct(response.data); 
        setIsLoading(false);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(isLoading){
<LoadingSpinner/>

  }

  return <div> {JSON.stringify(product)}</div> ; 
  
}
