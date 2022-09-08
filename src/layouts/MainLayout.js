/* Navbar aka axaina pageki taza w tanha la page Home da bakare denin nak bo hamw page akan */

import React from 'react';
import Navbar from '../components/Navbar';

export default function MainLayout(props) {
  return <>
   <Navbar/>
   {props.children} {/* bo garanawai shtakani tr ka la page akadaya */}
  </>;
}
