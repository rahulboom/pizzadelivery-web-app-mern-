import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addPizza } from '../actions/PizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
export default function Addpizza() {
    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState('')
    const [mediumprice, setmediumprice] = useState('')
    const [largeprice, setlargeprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const dispatch=useDispatch()
    const addpizzastate=useSelector(state=>state.addPizzaReducer)
    const{error,loading,success}=addpizzastate
    function formHandler(e){
        e.preventDefault();
        const pizza={
            name,
            image,
            description,
            category,
            prices:{
                small:smallprice,
                medium:mediumprice,
                large:largeprice
            }
        }
        console.log(pizza);
        dispatch(addPizza(pizza))
    }

    return (
        <div>
            {/* <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
                    <ul className='adminfunctions'>
                        <li><Link to={'/admin/userslist'}>Users List</Link></li>
                        <li><Link to={'/admin/pizzaslist'}>Pizzas List</Link></li>
                        <li><Link to={'/admin/addpizzas'}>Add New List</Link></li>
                        <li><Link to={'/admin/orderslist'}>Orders List</Link></li>
                    </ul>
                </div>
            </div> */}
            <div>
                <h3 style={{ fontSixe: '36pt' }}>Add Pizzas</h3>
                <div className='container text-left'>
                {loading && (<Loading/>)}
                {error && (<Error error='Something went wrong'/>)}
                {success && (<Success success='New Pizza Added Successfully'/>)}
                    <form onSubmit={formHandler}>
                        <input type="text" className='form-control' placeholder='Add Pizza Name' value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Small Pizza Price' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Medium Pizza price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Large Pizza Price' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Enter Pizza Description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Add Category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Add Pizza Image URL' value={image} onChange={(e) => { setimage(e.target.value) }} />
                        <button className='btn btn-primary mt-2' type='submit'>ADD PIZZA</button>
                    </form>
                </div>
            </div>
        </div>
    )
}