import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllUsers, deleteUser} from '../actions/userAction'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function Userslist(){
    const dispatch=useDispatch()
    const userstate=useSelector(state=>state.getAllUsersReducer)
    const {error,loading,users}=userstate
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    return(
        <div>
            {/* <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <h2>Admin Panel</h2>
                    <ul className='adminfunctions'>
                        <li><Link to={'/admin/userslist'}>Users List</Link></li>
                        <li><Link to={'/admin/pizzaslist'}>Pizzas List</Link></li>
                        <li><Link to={'/admin/addpizzas'}>Add New List</Link></li>
                        <li><Link to={'/admin/orderslist'}>Orders List</Link></li>
                    </ul>
                </div>
            </div> */}
            <h3>Users List</h3>
            {loading && <Loading/>}
            {error && <Error error="Something Went Wrong"/>}
            <table className='table table-striped table-bordered container'>
                <thead style={{backgroundColor:'tomato', color:'white'}}>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}