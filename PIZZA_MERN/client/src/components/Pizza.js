import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';


export default function Pizza({ pizza }) {

    //console.log(pizza.varients);
    const [quantity, setquantity] = useState(1);   // for price logic
    const [varient, setvarient] = useState('small');  //  for varient logic

//  for model variable
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const payments=useSelector((state)=>state.placeOrderReducer)

// ====

const dispatch = useDispatch()
 function addtocart(){
        payments.payment='false'
        if(localStorage.getItem('currentUser'))
        {dispatch(addToCart(pizza , quantity , varient))}
        else{
            window.location.href='/login'
        }
 }


    return (

        <div style={{ margin: '10px' , backgroundColor:'rgba(0,0,0,0.4)'}}>

            <div onClick={handleShow}>
            <h1 className='pizzaHead'>{pizza.name}</h1>
            <img src={pizza.image} className='img-fluid' style={{ height: '200px', width: '200px' , borderRadius:'50%'}} />
            </div>

            <div className='flex-container'>

                <div className='w-100 m-1'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }} >
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>

                </div>

                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>

            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price : {pizza.prices[0][varient] * quantity} Rs/-</h1>
                </div>

                <div className='m-1 w-100'>
                    <button className='btn' onClick={addtocart}>ADD TO CART</button>
                </div>
                <hr></hr>

            </div>

            {/* model  working */}
            <Modal show={show} onHide={handleClose} >
                <Modal.Header>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className='img-fluid' style={{height:'300px', width:'450px'}} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


