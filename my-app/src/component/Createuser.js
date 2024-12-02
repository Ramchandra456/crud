import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Createuser() {
  let[name,setname]=useState()
  let[age,setage]=useState()
  let[city,setcity]=useState()
  let[email,setemail]=useState()
  let navigate = useNavigate()
 
  function submitdata(e){
    e.preventDefault()
    axios.post("http://localhost:3000/users",{name,age,city,email}).then((res)=>{navigate('/readuser')})
  
  }
  return (
    <>

<div className='containe-fluide'>
    <div className='myform w-50 mx-auto p-4 shadow-lg mt-4'>
    <form onSubmit={submitdata}>
    <div className="mb-3">
  <label className="form-label">Name</label>
  <input type="text" class="form-control"  placeholder="Enter name" onChange={(e)=>{setname(e.target.value)}}/>
  </div>
  <div className="mb-3">
  <label className="form-label">Age</label>
  <input type="text" class="form-control"  placeholder="Enter age" onChange={(e)=>{setage(e.target.value)}}/>
  </div>
    <div className="mb-3">
  <label className="form-label">city</label>
  <input type="text" class="form-control"  placeholder="Enter City"onChange={(e)=>{setcity(e.target.value)}}/>
  </div>
    <div className="mb-3">
  <label className="form-label">Email</label>
  <input type="email" className="form-control"  placeholder="Enter Email"onChange={(e)=>{setemail(e.target.value)}}/>
  </div>
    <div className="mb-3">
  <input type="submit" className="form-control bg-danger" />
  </div>
  
    </form>
    </div>
    </div>
    </>
  )
}

export default Createuser