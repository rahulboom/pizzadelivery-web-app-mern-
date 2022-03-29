import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {BrowserRouter , Route , Routes ,Link , Switch } from  'react-router-dom'
import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Userslist from "./Userslist";

export default function Adminscreen() {

  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();



  useEffect(() => {

    if (!currentUser.isAdmin) {
      window.location.href = "/";

    }

  }, []); 
  return (

    <div>
      <div className="row justify-content-center">
        <div className="col-md-10 ">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
          <ul className="adminfunctions">
            <li>
              <Link to={'userslist'}>Users List</Link>
            </li>
            <li>
              <Link to={'pizzaslist'}>Pizzas List</Link>
            </li>
            <li>
              <Link to={'addpizza'}>Add New Pizza</Link>
            </li>
            <li>
              <Link to={'orderslist'}> Orders List</Link>
            </li>
          </ul>
          <Routes>

          <Route path='/'  element={<Userslist/>}></Route>
          <Route path='userslist'  element={<Userslist/>}></Route>
          <Route path='orderslist'  element={<Orderslist/>}></Route>
          <Route path='pizzaslist'  element={<Pizzaslist/>}></Route>
          <Route path='addpizza'  element={<Addpizza/>}></Route>
          <Route path='addpizza/:pizzaid'  element={<Editpizza/>}></Route>
          </Routes>

        </div>
      </div>
    </div>
  );

}