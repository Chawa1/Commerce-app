import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
//import RatingStars from '../components/RatingStars';
import Rating from 'react-rating';


const yellowStar = (
  <svg
    aria-hidden="true"
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>First star</title>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const greyStar = (
  <svg
    aria-hidden="true"
    className="w-5 h-5 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>First star</title>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);



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
  }, [id]);

  if(isLoading){
<LoadingSpinner/>

  }

  return(
     <div className='containet mx-auto grid grid-cols-2 divide-x-2  border-red-500 bg-white py-10 '>


<div className='px-10' > {/* left side */}
<h2 className='text-l font-medium mt-6 mb-6'> {product.title}</h2>
  <p className='text-sm text-gray-500 text-justify '> 
  {product.description}
  </p>


  {/* for rating star */}

<div className='flex items-center mt-6'>
{/*  ({ product.rating.rate})  */}  
  <Rating 
  className='pt-2 mr-2'  
  //initialRating={product && product.rating.rate} 
  fullSymbol={yellowStar}
   emptySymbol={greyStar}
//readonly={true}
    />
    {/* <p className='text-gray-400' > ({product.rating.count} reviews) </p>  */}
</div>



  {/* ama bo bashi xwaraway cartakaya price w jorakai */}
  <div className='flex justify-between mt-8'>
<p className='text-3xl text-green-700 '>{product.price}$</p>

<span className='border border-indigo-600 rounded-xl text-indigo-600 text-xs p-1'>
  {product.category && product.category.toUpperCase()}
  </span>
  </div>
</div>

<div className='px-10'>
  <img  src={product.image} alt='product'/> {/* right side include image */}
  </div>

     </div> 
     
  );
  
}
