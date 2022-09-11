import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
//import RatingStars from '../components/RatingStars';
import Rating from 'react-rating';


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

  return(
     <div className='containet mx-auto grid grid-cols-2 divide-x-2  border-red-500 bg-white py-10 px-10'>


<div className='' > {/* left side */}
<h2 className='text-l font-medium mt-6 mb-6'> {product.title}</h2>
  <p className='text-base text-gray-500  '> 
  {product.description}
  </p>


  {/* for rating star */}
<div>
  <Rating initialRating={product.rating.rate}/>
{/* <RatingStars rating = {Math.floor(product.rating.rate)} /> */}
</div>




  {/* ama bo bashi xwaraway cartakaya price w jorakai */}
  <div className='flex justify-between mt-8'>
<p className='text-xl text-green-700 '>{product.price}$</p>

<button className='border border-indigo-600 rounded-xl text-indigo-600 text-xs p-1'>
  {product.category && product.category.toUpperCase()}
  </button>
  </div>
</div>

<div className=''>
  <img  src={product.image} alt='product'/> {/* right side include image */}
  </div>

     </div> 
     
  );
  
}
