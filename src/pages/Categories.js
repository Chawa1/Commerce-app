import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ReactModal from '../components/ReactModal';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'blackberry', label: 'Blackberry' },
]; 

const Categories = () => {
  return (
  <MainLayout >
    <ReactModal/>
    <Select options={options} />   {/* isMulti='true' */}
  </MainLayout>
  )
}

export default Categories