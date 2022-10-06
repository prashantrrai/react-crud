import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const Update = () => {
  const [id, setId] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const naviagte = useNavigate();


  useEffect(() => {
    setId(localStorage.getItem("id"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const handleUpdate = (e) =>{
    e.preventDefault();
    console.log("Id...",id);

    axios.put(`https://6331e2233ea4956cfb692ca9.mockapi.io/crud-youtube/${id}`,
    {
        email:email,
        password:password,
    }
    ).then(() => {
        naviagte("/read");
    })
  };

  return (
    <>
      <h2>Update Operation</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>


        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
                <Link to={"/read"}>
                    <button className='btn btn-primary mx-2'>Back</button>
                </Link>

      </form>
    </>
  );
};

export default Update;
