

import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import axios from "axios"
function Readuser() {
  let navigate = useNavigate()
 let [val,setval] = useState([]); 

 useEffect(()=>{
  getdata()
},[])
  let  getdata=()=>{
    axios.get("http://localhost:3000/users").then((res)=>{
      // console.log(res.data);
      setval(res.data)
      })
  }
 
function deletdata(sno){
  axios.delete("http://localhost:3000/users/"+sno).then((res)=>{
    getdata()
    navigate("/readuser")
  })
}

  return (
    <>
      <table className="table">
        <thead>
          <tr >
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope='col'>age</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {val?<tbody>
         {val.map((item)=>{
          return(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.email}</td>
             <td>
               <Link className="ms-2" to={'/delete/'+item.id} ><i class="fa-solid fa-trash" onClick={()=>{deletdata(item.id)}}></i></Link>
              </td>
            </tr>
          )
         })}
        </tbody>:<span>no data found</span>}
      </table>
    </>
  )
}

export default Readuser