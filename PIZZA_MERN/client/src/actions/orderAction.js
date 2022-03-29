import axios from 'axios';
export const placeOrder=(token , subtotal)=>async(dispatch , getState)=>{

        dispatch({type:'PLACE_ORDER_REQUEST'})
        const currentUser = getState().loginUserReducer.currentUser
        const cartItems = getState().cartReducer.cartItems

        try{

          const response = await axios.post('/api/orders/placeorder' , {token , subtotal , currentUser , cartItems})
          dispatch({type:'PLACE_ORDER_SUCCESS' , payload:response.data.captured})
          localStorage.setItem('trackUser' , JSON.stringify(response.data.source.id))
          console.log(response.data);
        }

        catch(error){
            dispatch({type:'PLACE_ORDER_FAILED'})
            console.log(error);

        }

}


export const getUserOrders=()=> async (dispatch, getState)=>{
    const currentUser = getState().loginUserReducer.currentUser
    dispatch({type:'GET_USER_ORDERS_REQUEST'})

    try {
        const response = await axios.post('/api/orders/getuserorders' ,{userid : currentUser._id})
        dispatch({type:'GET_USER_ORDERS_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_USER_ORDERS_FAILED' , payload : error})
    }
}

// ==================================================admin=================

export const getAllOrders=()=>async(dispatch,getState)=>{
    const currentUser=getState().loginUserReducer.currentUser
    dispatch({type:'GET_ALLORDERS_REQUEST'})
    try {
        const response=await axios.get('/api/orders/getallorders')
        console.log(response);
        dispatch({type:'GET_ALLORDERS_SUCCESS',payload:response.data})
    } catch (error) {
        dispatch({type:'GET_ALLORDERS_FAILED',payload:error})
        console.log(error);
    }
}
export const deliverOrder=(track)=>async dispatch=>{
    try {
        const response=await axios.post('/api/orders/deliverorder',{track})
        console.log(response);
        alert('Order Status Changed')
        const orders=await axios.get('/api/orders/getallorders')
        dispatch({type:'GET_ALLORDERS_SUCCESS',payload:orders.data})
    } catch (error) {
        console.log(error);
    }
}


export const trackOrders=(trackfood)=>async dispatch=>{

    //const currentUser=getState().loginUserReducer.currentUser

    console.log(trackfood)

    dispatch({type:'GET_TRACKORDERS_REQUEST'})

    try {

        //const response=await axios.get('/api/orders/getallorders')

        //console.log(response);

        dispatch({type:'GET_TRACKORDERS_SUCCESS',payload:trackfood})

        //localStorage.setItem('trackUser' , JSON.stringify(trackfood))

    } catch (error) {

        dispatch({type:'GET_TRACKORDERS_FAILED',payload:error})

        console.log(error);

    }

}