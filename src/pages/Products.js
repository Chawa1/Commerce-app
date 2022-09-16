//we use this api https://fakestoreapi.com/docs

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';

import ProductsList from '../components/ProductsList';

import LoadingSpinner from '../components/LoadingSpinner';

import ReactPaginate from 'react-paginate';

export default function Products( ) {

  const [products, setProducts] = useState([]); //katek ka la api datakan garayawa lerada save' store akain 
  const [isLoading, setIsLoading] = useState(true);


  //we start with an empty list of items pagination 
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(4); // 4 product la har page ka


  //bo style pagination
  const nextButton = (
    //<button className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">
    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg> 
    </button>
  );
  const prevButton = (
    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  )




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

//calculation for the react paginate, lerada zhmarai page akana

if(products){
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  setCurrentItems(products.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(products.length / itemsPerPage));
  /* const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  setCurrentItems(products.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(products.length / itemsPerPage));  */
}
  }, []);

  useEffect(()=> {
    //calculation for the react paginate, lerada zhmarai page akana
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  setCurrentItems(products.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(products.length / itemsPerPage)); 

  },[itemOffset, itemsPerPage, products]);

  // Invoke when user click to request another page in paginate., lera ka page akan gora zhmarakan bgoren
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  if(isLoading){
    <LoadingSpinner/>
      }

  return (

    <MainLayout>
    {/*   {JSON.stringify(products)}  */}

    <ProductsList products = {currentItems}/> {/* ama item akaya */}
    <div className="container mx-auto flex justify-center mb-10">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          className="flex"
          previousLabel={prevButton}
          nextLabel={nextButton}
          pageClassName="bg-white border-gray-300 text-gray-500  hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          activeClassName="bg-indigo-300 border-gray-300 text-gray-500  hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          renderOnZeroPageCount={null}
        />
      </div>

    </MainLayout>

  )
}
