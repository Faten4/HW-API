import React from 'react'
import Search from "./Search"
import CardsData from "./Data.json"
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <ul>
        <Link to="Store">Store</Link>
        <li>About</li>
        <li> 
          <Link to="Login">Log in</Link>
        </li>
      </ul>
    
        <Search data={CardsData}/>
    </div>
  )
}

export default Nav