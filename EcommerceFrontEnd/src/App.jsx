import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Product from './Components/Product'
import FilteredProduct from './Components/FilteredProduct'
import BuyedProduct from './Components/BuyedProduct'

const App = () => {


  return (
  <Routes>


    <Route path='/' element={<Home/>}/>
    <Route path="/login/user" element={<Login/>}/>
    <Route path='/register' element={<Register/>} />
    <Route path='/product/:id' element={<Product/>} />
    <Route path='/prod/:category' element={<FilteredProduct/>} />
    <Route path='/product/allBuyedProducts' element={<BuyedProduct/>} />






  </Routes>
  )
}

export default App