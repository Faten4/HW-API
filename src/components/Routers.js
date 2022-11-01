import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Login from './Login';
import Nav from './Nav';
import Store from './Store';
import Home from './Home';
function Routers() {
  return (
    <>  
    <Nav/>
    <Routes>

      <Route path='Store' element={<Store />}></Route>
      <Route path='Login' element={<Login />}></Route>
      <Route path='Home' element={<Home />}></Route>
    </Routes> </>
  )
}

export default Routers