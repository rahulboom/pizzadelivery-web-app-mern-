import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
import { getPizzaById,editPizza } from '../actions/PizzaActions'
import { useParams } from 'react-router-dom'


export default function Editpizza() {
    const {pizzaid}= useParams();
    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState('')
    const [mediumprice, setmediumprice] = useState('')
    const [largeprice, setlargeprice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const dispatch = useDispatch()
    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const { pizza, error, loading } = getpizzabyidstate
    const editpizzastate = useSelector(state => state.editPizzaReducer)
    const { editloading, editerror, editsuccess } = editpizzastate;
    function formHandler(e) {
        e.preventDefault();
        const editedpizza = {
            // _id:match.params.pizzaid,id
            _id:pizzaid,
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }
        dispatch(editPizza(editedpizza));
    }
    useEffect(() => {
        console.log(pizzaid);
        if (pizza) {
            if (pizza._id === pizzaid) {
                setname(pizza.name)
                setdescription(pizza.description)
                setcategory(pizza.category)
                setimage(pizza.image)
                setsmallprice(pizza.prices[0]['small'])
                setmediumprice(pizza.prices[0]['medium'])
                setlargeprice(pizza.prices[0]['large'])
            } else {
                dispatch(getPizzaById(pizzaid))
            }
        }
        else {
            dispatch(getPizzaById(pizzaid))
        }

    }, [pizza, dispatch])

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
                    {loading && (<Loading />)}
                    {error && (<Error error='Something went wrong' />)}
                    {editsuccess && (<Success success='Pizza details Updated successfully' />)}
                    {editloading && (<Loading />)}
                    <form onSubmit={formHandler}>
                        <input type="text" className='form-control' placeholder='Add Pizza Name' value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Small Pizza Price' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Medium Pizza price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Large Pizza Price' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Enter Pizza Description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Add Category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Add Pizza Image URL' value={image} onChange={(e) => { setimage(e.target.value) }} />
                        <button className='btn btn-primary mt-2' type='submit'>UPDATE PIZZA</button>
                    </form>
                </div>
            </div>
        </div>
    )
}