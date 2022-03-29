import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Filter from '../components/Filter'
import { deliverOrder, getAllOrders , trackOrders } from '../actions/orderAction'
export default function Orderslist() {
    const [tracking , settracking] = useState('')
    const dispatch = useDispatch()
    const getordersstate = useSelector(state => state.getAllOrdersReducer)
    const { loading, error, orders } = getordersstate

    function dochange(order){

        console.log(tracking)
        dispatch(trackOrders(order._id))
        var track={orders:order._id,
         tracking:tracking};
        dispatch(deliverOrder(track))

    }


    useEffect(() => {
        dispatch(getAllOrders())
    }, [])
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
                <h3 style={{ fontSixe: '36pt' }}>Orders List</h3>
                {error && (<Error error='something went wrong' />)}
                <table className='table container table-striped table-bordered'>
                    <thead style={{ backgroundColor: 'tomato', color: 'white' }}>
                        <tr>
                            <th>Order ID</th>
                            <th>Email</th>
                            <th>User ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.map(order => {
                            return <tr>
                                <td>{order._id}</td>
                                <td>{order.email}</td>
                                <td>{order.userid}</td>
                                <td>{order.OrderAmount}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>
                                    <select className="form-control" name='' id='' vlaue={tracking} onChange={(e) => { settracking(e.target.value) }}>
                                        <option value="">--</option>
                                        <option value="orderaccepted">order accepted</option>
                                        <option value="cooking">cooking</option>
                                        <option value="foodontheway">food on the way</option>
                                        <option value="delivered">delivered</option>
                                    </select>
                                    <button className='btn btn-danger' onClick={() => { dochange(order) }}>Change</button>
                                </td>
                                <td>
                                    {order.isDelivered}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}