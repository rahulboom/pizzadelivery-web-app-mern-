import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userAction";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch()
  return (
    <div className="mynav">
      <nav class="navbar navbar-expand-lg ">
        
        <a>
          <Link className="navbar-brand" to="/">
            Bliss Pizza &#127829; &nbsp; The  &nbsp;
            <Typewriter
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={100}
          words={['Indian', 'Indian Italian',]}
          />
            
            
          </Link>
        
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         <span> <i className='fas fa-bars' style={{color:'white'}}></i></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            {currentUser ? (
              <div class="dropdown mt-2">
                <a style={{ color: 'white' }} className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {currentUser.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/orders">Orders</a>
                  <a className="dropdown-item" href="/track">Track</a>
                  <a className="dropdown-item" href="#" onClick={() => { dispatch(logoutUser()) }}><li>Logout</li></a>

                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </a>
              </li>
            )}

            <li class="nav-item">
              <a className="nav-link">
               { localStorage.getItem('currentUser') && <> <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/cart"
                >
                 &#128722;Cart
                </Link>{" "}
                {cartstate.cartItems.length} </>}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
