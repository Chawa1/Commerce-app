import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import MainLayout from '../layouts/MainLayout';
import Select from 'react-select';


export default function Feedback() {

    const [products, setProducts] = useState([]); //katek ka la api datakan garayawa lerada save' store akain 
    const [isLoading, setIsLoading] = useState(true);
    const [options, setOptions] = useState([]);
  
  
  
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

useEffect(()=>{

    const filtered = products.map(({id, title, ...rest }) => {
        return { value: id, label: title };
                  });
                  console.log('successfully filtered users', filtered);
                  setOptions(filtered);

},[products]);


  
    if(isLoading){
      <LoadingSpinner/>
        }
  

  return (

    
      
    <MainLayout>
        <Select options={options} onChange={(selected)=> alert(JSON.stringify(selected.label))} />
    </MainLayout>
  )
}
