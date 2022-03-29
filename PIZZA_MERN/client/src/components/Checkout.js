import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderAction';

import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
import kartImg from "../images/kart.gif";

export default function Checkout({ subtotal }) {

  const orderstate = useSelector((state) => state.placeOrderReducer)
  const { loading, error, success } = orderstate

  const dispatch = useDispatch()
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal))
  }



  return (
    <div>

      {loading && (<Loading />)}
      {error && (<Error error='Something went Wrong' />)}
      {success && (<Success success='Your Order Placed Successfully' />)}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51KdHk1CnrrcGfTLp9A4U2UWTgwLLnkm2LMw88blJFdJt2ThDx0JbsJMj1LbGiXOVBNkNjAMoSl0j2FWIdEzlqoTY00hu9v4rfg'
        currency='INR'
      >

        <button className='paybtn'>Pay Now</button>
        <br></br> <br></br>
        <div className='kart'>
          <img src={kartImg} width={'440px'} alt='logo' className="img-fluid"></img>
        </div>


      </StripeCheckout>

    </div>
  )
}
