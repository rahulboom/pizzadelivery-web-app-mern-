import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import Error from "../components/Error";
import Loading from "../components/Loading";

import aboutImg from "../images/login.jpg";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector(state=>state.loginUserReducer)
  const {Loading, error} = loginstate
  const dispatch = useDispatch();

  useEffect(()=>{
      if(localStorage.getItem('currentUser'))
      {
          window.location.href='/'
      }
  },[])

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="bg_image"
    style={{
        backgroundImage: 'url(' + aboutImg + ')',
        backgroundSize: "cover",
        height: "92.8vh",
        //width: "197.5vh",
        width: "auto",
        color: "#f5f5f5",
        backgroundAttachment: "fixed",
    }}>
      <div className="row justify-content-left mx-3 ">
        <div className="col-md-4 mt-5 text-left">
          <h2 className="loginStyle">
            Login  &#127829;
          </h2>
          {Loading && (<Loading/>)}
          {error && (<Error error='Invalid Credentials'/>)}
          <div>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
            <input
              required
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></input>
            <button onClick={login} className="btn mt-3 mb-3">LOGIN</button>
            <br></br>
            <a style={{color:'white' , fontSize:'larger'}} href="/register" >Don't have an Account? </a>
          </div>
        </div>
      </div>
    </div>
  );
}
