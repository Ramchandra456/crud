import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

function Searchuser() {
  const [val, setval] = useState('');
  const [mydata, setmydata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchdata = async (key) => {
    setLoading(true);
    setError(null);
    try {
      const responses = await Promise.all([
        axios.get(`http://localhost:3000/users?name=${key}`),
        axios.get(`http://localhost:3000/users?email=${key}`),
        axios.get(`http://localhost:3000/users?city=${key}`),
        axios.get(`http://localhost:3000/users?age=${key}`)
      ]);

      const data = responses.reduce((acc, response) => acc.concat(response.data), []);
      console.log('Received data:', data);
      setmydata(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="input-group m-1">
        <input
          type="text" className="form-control" placeholder="Search Here" onChange={(e) => setval(e.target.value)}
        />
        <span className="input-group-text">
          <button className='btn btn-info text-red' onClick={() => searchdata(val)}>Search</button>
        </span>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope='col'>age</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {mydata.length > 0 ? (
            mydata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>{item.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Searchuser;