import React from 'react'
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';
import { Footer } from './Footer';

export const Women = () => {
  return (
    <>
     <Navbar />
      <div id="mainmen">
        <div id="menside">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  )
}
