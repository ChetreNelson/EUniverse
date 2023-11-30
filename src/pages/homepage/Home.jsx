import React from 'react'
import Showcase from '../../Components/Layouts/Showcase/Showcase'
import ProductListing from '../../Components/Layouts/ProductListing/ProductListing'
import Navbar from '../../Components/Navbar/Navbar'
const Home = () => {
  return (
   <>
      <Navbar/>
     <section>
        <Showcase/>
        <ProductListing/>
     </section>
     </>
    
  )
}

export default Home
