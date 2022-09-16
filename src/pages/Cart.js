import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Cart() {
  // eslint-disable-next-line
const [cart, setCart] = useState();
// eslint-disable-next-line
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
