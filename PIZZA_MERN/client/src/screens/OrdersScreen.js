import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderAction'

import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function () {

    const dispatch = useDispatch()
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])

    return (
        <div>

            <h2 className='mycart' style={{ fontSize: '35px' }}>My Orders</h2>
            <div className="row justify-content-center">
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {orders && orders.map(order => {
                    
                    return <div className="col-md-10 m-2 p-1" style={{ backgroundImage: 'linear-gradient( 63.1deg,  rgba(5,23,111,1) 16.4%, rgba(24,95,240,1) 64.5% )', color: 'white' }}>

                        <div class="container">
                            <div class="row gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-body p-0">
                                            <div class="invoice-container">
                                                <div class="invoice-header">
                                                  

                                                    <div class="row gutters">
                                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                                            <a href="index.html" class="invoice-logo">
                                                                    Bliss Pizza &#127829;
                                                            </a>
                                                        </div>
                                                       
                                                    </div>
                                                    <br></br>

                                                    <div class="row gutters">
                                                        <div class="col-xl-6 col-lg-6 col-md-9 col-sm-9 col-19">
                                                            <div class="invoice-details">
                                                                <address>
                                                                {currentUser.name}<br></br>
                                                                {order.shippingAddress.street} , {order.shippingAddress.city} , {order.shippingAddress.pincode}<br></br>
                                                                </address>

                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                            <div class="invoice-details">
                                                                <div class="invoice-num">
                                                                    <div>Transaction Id :{order.transactionId}</div>
                                                                    <div>{order.createdAt.substring(0,10)}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="invoice-body">
                                                    <div class="row gutters">
                                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                                            <div class="table-responsive">
                                                                <table class="table custom-table m-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Items</th>
                                                                            <th>Order ID</th>
                                                                            <th>Quantity</th>
                                                                            <th>Sub Total</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                {order.orderItems.map(item => {
                                                                                    return <div>
                                                                                        <p>{item.name} ₹ {item.price}</p>
                                                                                    </div>
                                                                                })}
                                                                            </td>
                                                                            <td> {order._id}</td>
                                                                            <td>
                                                                            {order.orderItems.map(item => {
                                                                                    return <div>
                                                                                        <p>{item.quantity}</p>
                                                                                    </div>
                                                                                })}
                                                                            </td>
                                                                            <td>₹{order.orderAmount}</td>
                                                                        </tr>


                                                                        <tr>
                                                                            <td>&nbsp;</td>
                                                                            <td colspan="2">
                                                                                <p>
                                                                                    Subtotal<br></br>
                                                                                    delivery Charges<br></br>
                                                                                    Tax<br></br>
                                                                                </p>
                                                                                <h5 class="text-success"><strong>Grand Total</strong></h5>
                                                                            </td>
                                                                            <td>
                                                                                <p>
                                                                                ₹{(order.orderAmount)}<br></br>
                                                                                ₹35.00<br></br>
                                                                                ₹11.23<br></br>
                                                                                </p>
                                                                                <h5 class="text-success"> ₹{(order.orderAmount)+35+11.23}<strong></strong></h5>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                })}

            </div>
        </div>
    )
}









