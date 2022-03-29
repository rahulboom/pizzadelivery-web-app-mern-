import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Filter from '../components/Filter'
import Error from '../components/Error'
import Loading from '../components/Loading'
import { getAllPizzas,deletePizza } from '../actions/PizzaActions'
import { Link } from 'react-router-dom'

export default function Pizzaslist(){
    const dispatch=useDispatch()
    const pizzasstate=useSelector(state=>state.getAllPizzasReducer)
    const {pizzas,loading,error}=pizzasstate;
    useEffect(()=>{
        dispatch(getAllPizzas());
    },[])
    return(
        <div>
      
            <h3 style={{fontSixe:'36pt'}}>Pizzas List</h3>
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            <table className='table container table-bordered'>
                <thead style={{backgroundColor:'tomato', color:'white'}}>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas && pizzas.map(pizza=>{
                        return <tr>
                            <td>{pizza.name}</td>
                            <td>
                                Small:{pizza.prices[0]['small']}<br/>
                                Medium:{pizza.prices[0]['medium']}<br/>
                                Large:{pizza.prices[0]['large']}
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <Link to={`/admin/addpizza/${pizza._id}`}><i className='fa fa-edit m-1' style={{color:'blue'}}></i></Link>
                                <i className='fa fa-trash ml-2' onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}