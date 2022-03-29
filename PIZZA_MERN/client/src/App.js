import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import HomePage from './screens/HomePage';

import {BrowserRouter , Route , Routes ,Link , Switch } from  'react-router-dom'
import CartScreen from './screens/CartScreen';
import Registration from './screens/Registration';
import Login from './screens/Login';
import OrdersScreen from './screens/OrdersScreen';
import AdminScreen from './screens/AdminScreen';


import Userslist from './screens/Userslist';
import Orderslist from './screens/Orderslist';
import Pizzaslist from './screens/Pizzaslist';
import Addpizza from './screens/Addpizza';
import Editpizza from './screens/Editpizza';
import Trackorders from './screens/Trackorders';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
      
      <Routes>
          <Route path="/"  element={<HomePage/>}></Route>
          <Route path="/cart"  element={<CartScreen/>}></Route>
          <Route path="/register"  element={<Registration/>}></Route>
          <Route path="/login"  element={<Login/>}></Route>
          <Route path="/orders"  element={<OrdersScreen/>}></Route>
          <Route path="/track"  element={<Trackorders/>}></Route>
          <Route path='/admin/*' element={<AdminScreen/>}> </Route>

          {/* ======================== */}
          {/* <Route path="/admin" exact element={<Userslist />}></Route>
          <Route path="/admin/userslist" element={<Userslist />} exact />
          <Route path="/admin/pizzaslist" element={<Pizzaslist />} exact />
          <Route path="/admin/addpizzas" element={<Addpizza />} exact />
          <Route path="/admin/orderslist" element={<Orderslist />} exact />
          <Route path="/admin/editpizza/:pizzaid" element={<Editpizza />} exact /> */}
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
