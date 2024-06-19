import React from 'react'
import { useSelector } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import { Badge } from "react-bootstrap";

export default function Navbar() {
    
  const navigate = useNavigate()
  const handleLogout =()=>{
     localStorage.removeItem('authToken')
     navigate('/login')
  }

  //Subscribing to the store
  const cartItems = useSelector((store)=>store.cart.items)

  



  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="#">Foodyy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
      </ul> 

      {(localStorage.getItem('authToken'))?
       <div className='d-flex'>
          <Link className="nav-link active fs-5 text-white" aria-current="page" to="/orders">My Orders</Link>
          {/* <div className="btn text-white fs-5 mx-1" to='/cart'>
          My Carts
          <Badge pill bg='danger'>{cartItems.length}</Badge>
          </div> */}
          {/* <Link className="btn text-white fs-5 mx-1" to='/cart'>My Carts ({cartItems.length})</Link> */}
          <Link className="btn text-white fs-5 mx-1" to='/cart'>My Carts <Badge pill bg='white' text='success'>{cartItems.length}</Badge> </Link>
          <Link className=" btn btn-danger mx-1" onClick={handleLogout}>Logout</Link>
       </div> :
       <div>
       <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
       <Link className="btn bg-white text-success mx-1" to="/createUser">Signup</Link>
       </div>
       
      }

      {/* <div> btn bg-danger text-white mx-1
      <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
      <Link className="btn bg-white text-success mx-1" to="/createUser">Signup</Link>
      </div> */}
          
   
    </div>
  </div>
</nav>
    </>
  )
}
