
import React from 'react'
import Upperheader, { Header } from './components/header'
import Products from './components/products'
import Product2 from './components/product2'
import NewProduct from './components/newproduct'



const Home = () => {
  return (
    <div>
     <Products />
     <Product2/>
        <NewProduct />
      
    </div>
  )
}

export default Home


