import axios from 'axios'
import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('');

  function getData() {
    axios.get('https://6331e2233ea4956cfb692ca9.mockapi.io/crud-youtube').then((res) => {
      console.log(res.data)
      setData(res.data); 
    });
  } 

  function handleDelete(id){
    axios.delete(`https://6331e2233ea4956cfb692ca9.mockapi.io/crud-youtube/${id}`
    ).then(() => {
        getData()
    })
  }

  const setToLocalStorage = (id,email,password) => {
    localStorage.setItem("id", id);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }

useEffect(() => {
  getData();
}, []);



  return (
    <>

      <div class="form-check form-switch">
      <input 
      onClick={ () => {
        if(tabledark === "table-dark") setTableDark("")
        else setTableDark('table-dark')
      } } 
      
      className="form-check-input" type="checkbox" role="switch"/>
    </div>
      <div className='d-flex justify-content-between m-2'>


          <h2>Read Operation</h2>
          <Link to={"/react-crud"}>
              <button className='btn btn-primary'>Create</button>
          </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>

      { 
        data.map((eachData) => {
          return(
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.email}</td>
                  <td>{eachData.password}</td>
                  <td>
                    <Link to={"/update"}>
                      <button className='btn-success' onClick={() => setToLocalStorage(eachData.id,eachData.email,eachData.password)}>Update</button>
                    </Link>
                  </td>
                  <td><button onClick={() => handleDelete(eachData.id)}>Delete</button></td>
                </tr>
              
              </tbody>
            </>
          )
        })
        
      }
      </table> 
    </>
  )
}

export default Read