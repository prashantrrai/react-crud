import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Create = () => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const history = useNavigate();

    // const header = {"Access-Control-Allow-Origin": "*"};

    const handlesubmit = (e) => {
        e.preventDefault();             //this is very important line for data saving in backend mockapi
        console.log("clicked")
        axios.post('https://6331e2233ea4956cfb692ca9.mockapi.io/crud-youtube',{
            email:email,
            password:password,
        // header,
        })
        // history("/read");
        .then(() => {
            history("/read");
        })
    }

    return (
        <>
            <div className='d-flex justify-content-between m-2'>
                <h2>Create Operation</h2>
                <Link to={"/read"}>
                    <button className='btn btn-primary'>Show DATA</button>
                </Link>
            </div>

            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Show Password</label>
                </div>
                
                <button type="submit" className="btn btn-primary m-3" onClick={handlesubmit}>Submit</button>
            </form>
            
        </>
    )
};

export default Create;