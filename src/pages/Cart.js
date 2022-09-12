import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Cart() {
const [cart, setCart] = useState();
const [isLoading, setIsLoading] = useState();

useEffect(() => {  
  axios
    .get(`https://fakestoreapi.com/carts/user/3`)
    .then((response) => { 

      console.log('list of shoping cart:' ,response.data);
      setCart(response.data); 
      setIsLoading(false);
    
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  return (
    <div>Cart</div>
  )
}
