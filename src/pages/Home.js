import React from 'react';
import Layout from '../layouts/MainLayout';  // Layout aka Navbar akai tyaya
import HeroSection from '../components/HeroSection'; //ama bashi sarawai website akaya Hero 
import CategoriesSection from '../components/CategoriesSection'; //ama categorise akai tyaya

export default function Home () {
  return (
    <Layout>
 {/* {JSON.stringify(cart)} */}
 <HeroSection />
      <CategoriesSection /> 

    </Layout> /* main layout tanha wshai home ii tayaya */
  )
}