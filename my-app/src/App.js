import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Createuser from './component/Createuser'
import Readuser from './component/Readuser'
import Sign from './component/Sign';
import Serachuser from './component/Searchuser'
import Menu from './component/Menu'
import Header from './component/Header'
function App() {
  return (
   <>

   <BrowserRouter>
   <Header/>
   <Menu/>
   <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/Readuser' element = {<Readuser/>}/>
    <Route path = '/Createuser' element = {<Createuser/>}/>
    <Route path = './sign'element = {<Sign/>}/>
    <Route path  = '/Searchuser' element = {<Serachuser/>}/>
   
   </Routes>
   </BrowserRouter>
  
   </>
  )
}

export default App