export const placeOrderReducer =(state={payment:'false'}, action)=>{

    switch(action.type)
    {
        case 'PLACE_ORDER_REQUEST' : return{
            loading:true
        }
        case 'PLACE_ORDER_SUCCESS' : return{
            loading:false,
            // success:true
            payment:action.payload
        }
        case 'PLACE_ORDER_FAILED' : return{
            loading:false,
            error:action.payload
        }
        default : return state
    }
}


export const getUserOrdersReducer=(state={orders : []}, action)=>{

    switch(action.type){
        case 'GET_USER_ORDERS_REQUEST' : return{
            loading : true,
            ...state
        }

        case 'GET_USER_ORDERS_SUCCESS' : return{
            loading : false,
            orders : action.payload
        }

        case 'GET_USER_ORDERS_FAILED' : return{
            error : action.payload,
            loading : false
        }

        default : return state
    }
}


// =====================admin===============

export const getAllOrdersReducer=(state={orders:[]},action)=>{
    switch (action.type) {
        case 'GET_ALLORDERS_REQUEST': return{
            loading:true
        }
        case 'GET_ALLORDERS_SUCCESS': return{
            loading:false,
            orders:action.payload
        }
        case 'GET_ALLORDERS_FAILED': return{
            loading:false,
            error:action
        }
        default: return state
    }
}

export const trackOrdersReducer=(state={},action)=>{



    switch (action.type) {

        case 'GET_TRACKORDERS_REQUEST': return{

            loading:true

        }

        case 'GET_TRACKORDERS_SUCCESS': return{

            loading:false,

           trackUser:action.payload

        }

        case 'GET_TRACKORDERS_FAILED': return{

            loading:false,

            error:action

        }

        default: return state

    }



}