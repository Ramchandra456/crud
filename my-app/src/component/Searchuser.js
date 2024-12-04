import React,{ useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
function Searchuser() {
  let [val,setval] = useState()
  let[mydata,setmydata] = useState()
 let searchdata = (key)=>{
  axios.get("http://localhost:3000/users?name="+key).then((res)=>{
   
    setmydata(res.data)
    console.log(res.data)
  })
  axios.get("http://localhost:3000/users?email="+key).then((res)=>{
    
    setmydata(res.data)
    console.log(res.data)
   })
  axios.get("http://localhost:3000/users?city="+key).then((res)=>{
    
    setmydata(res.data)
    console.log(res.data)
  })
  axios.get("http://localhost:3000/users?age="+key).then((res)=>{
    
    setmydata(res.data)
    console.log(res.data)
  })

}
  return (
   <>
   <div className="input-group m-1 ">
  <input type="text" class="form-control" placeholder="Search Name"  onChange={(e)=>{setval(e.target.value)}}/>
  <span className="input-group-text"> <button className='btn btn-info text-red' onClick={()=>{searchdata(val)}}>Search</button></span>
</div>
<table className="table">
        <thead>
          <tr >
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope='col'>age</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
           
          </tr>
        </thead>
        {mydata?<tbody>
         {mydata.map((item)=>{
          return(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.email}</td>         
            </tr>
          )
         })}
        </tbody>:<span>no data found</span>}
      </table>
   </>
  )
}

export default Searchuser