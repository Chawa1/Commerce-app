import React from 'react';
import MainLayout from '../layouts/MainLayout';
//import ReactModal from '../components/ReactModal';
//import Select from 'react-select';


/* const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'blackberry', label: 'Blackberry' },
];  */

export default function Categories() {

  function handleUpload(e){
console.log('the uploaded file object is:', e.target.files);
if(e.target.files.length >2){
  alert('please chose one file only');
}

  }


  return (
  <MainLayout >
 {/*   <ReactModal/>
     <Select options={options} /> */}   {/* isMulti='true' */}
     <label>uploaded Your cv</label>
     <br/>
    <input multiple type="file" name="file" onChange={handleUpload} />
    <br/>
    <label>uploaded Your coveLetter</label>
     <br/>
    <input multiple type="file" name="file" onChange={handleUpload} />

  </MainLayout>
  )
}
