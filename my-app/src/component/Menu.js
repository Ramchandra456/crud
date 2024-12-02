import React from 'react'
import {Link} from 'react-router-dom'
function Menu() {
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-primary border-danger">
    <div className="container-fluid ">
   
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/readuser">Read</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link"to="/Createuser">Create</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/Searchuser">Search</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link"to="/Sign">SignIn</Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Menu