import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'
import Success from "../components/Success";

import Pizzaman from "../images/PizzaMan.png";

export default function Cartscreen() {

  const payments = useSelector((state)=>state.placeOrderReducer)
  const {payment} = payments

  const cartstate = useSelector(state=>state.cartReducer)
  // const cartItems = cartstate.cartItems
  if(payment == true){
    var le = cartstate.cartItems.length;
    cartstate.cartItems.splice(0,le)
    localStorage.removeItem('cartItems')
  }
  else{
    const cartItems = cartstate.cartItems
    var subtotal = cartstate.cartItems.reduce((x,item)=>x+item.price,0)
  }

  // var subtotal = cartItems.reduce((x , item)=> x+item.price , 0)

  const dispatch = useDispatch()
  return (
    <div>
       
    
       { payment=='false' ? ( <div className='row justify-content-center'>

          
          <div className='col-md-6 mt-5'>
              <h2 style={{fontSize: '35px'}}> My Cart</h2>
              <hr/>
              
              {cartstate.cartItems.map(item=>{
              return <div className='flex-container'>
                    <div className='text-left m-1 w-100'>
                      <h1>{item.name} [{item.varient}]</h1>
                      <h6>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h6>
                      <h1 style={{display:'inline'}}>Quantity :</h1>
                      <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item , item.quantity+1 , item.varient))}}></i>
                      <b>{item.quantity}</b>
                      <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item , item.quantity-1 , item.varient))}}></i>
                      <hr/>
                    </div>

                    <div className='m-1 w-100'>
                      <img src={item.image} style={{height:'100px' , width:'100px'}}/>
                    </div>

                    <div className='m-1 w-100 mt-5'>
                      <i className='fa fa-trash' style={{color:'black', paddingRight:'50px' , border:'3px'}} aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                    </div>
              </div>
              })}
              
          </div>

          <div className='col-md-4 text-right' style={{paddingTop:'50px'}}>
              <h2 className='mycart' style={{fontSize:'35px'}}>SubTotal : {subtotal} /-</h2>
              <Checkout subtotal={subtotal}></Checkout>
          </div>

      


        </div>):(

        <> <div style={{ flex: 1 }}>
        {Success && (
          <div style={{ textAlign: "center" }}>
            <img src={Pizzaman} alt="pizzaman" height="300px" />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              We have received your order, Thank you
            </div>
           
            <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
              Will be ready in 20-30 min.
            </div>
          </div>
        )}
      </div>
      <br></br><br></br>
          <button className='btn btn-danger' onClick={()=>{window.location.href='/'}}> Explore More</button> </>

        )}

    </div>

    
  )
}
