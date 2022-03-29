import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

import regImg from "../images/registration.jpg";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  
  const registerstate = useSelector(state =>state.registerUserReducer)
  const {error , loading , success} = registerstate

  const dispatch = useDispatch()
  function register(){
      if(password!=cpassword)
      {
          alert("password not matched")
      }
      else{
          const user={
              name,
              email,
              password
          }
          console.log(user);
          dispatch(registerUser(user))
      }
  }

  return (
    <div  className="bg_image"
    style={{
        backgroundImage: 'url(' + regImg + ')',
        backgroundSize: "cover",
        
        height: "92.8vh",
        //width: "197.5vh",
        width:'auto',
        color: "#f5f5f5",
        backgroundAttachment: "fixed",
    }}>
      <div className="row  mx-5">
        <div className="col-md-5 mt-5 text-left ">

          {loading && (<Loading/>)}
          {success && (<Success success='User Registered Successfully'/>)}
          {error && (<Error error='Email already registred'/>)}
          <pre className="registrationStyle">
            Register Here &#127829;
          </pre>
          <div>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
              required
            ></input>
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              required
            ></input>
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              required
            ></input>
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e)=>{setcpassword(e.target.value)}}
              required
              
            ></input>
            <button onClick={register} className="btn mt-3 mb-3">REGISTER</button>
            <br></br>
            <a style={{color:'black'}} href="/login">Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
