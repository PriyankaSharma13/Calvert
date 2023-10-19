import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import CardPage from './components/product-card/card'
import NavBar from './navigation/navbar'
// import  ProductCard from './components/product-card'
// import ProductCard from './components/product-card'

function App() {



  return (
    <>
      <div>
        <NavBar/>
        <CardPage/>
        {/* <ProductCard /> */}
        {/* <ProductCard /> */}
      </div>
    </>
  )
}

export default App
