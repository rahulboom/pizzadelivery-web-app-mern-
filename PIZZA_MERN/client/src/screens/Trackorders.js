import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../actions/orderAction";
import Loading from "../components/Loading";
import Error from "../components/Error";

import delImg from "../images/delivery.jpg";
export default function Trackorders() {
  const dispatch = useDispatch();
  const trackorder = useSelector((state) => state.trackOrdersReducer);
  const { trackUser } = trackorder;

  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getordersstate;
  var filteredorder = [];

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <div  style={{
      backgroundImage: 'url(' + delImg + ')',
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
      color: "#f5f5f5",
      backgroundAttachment: "fixed",
  }}>
    
      <h2 className="trackStyle">Track Orders</h2>
  
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      {orders &&
        orders.map((order) => {
          return order.transactionId === trackUser ? (
            <div className="container text-left ">
        
              <div >
                <span className="headItem">Ordered Items: 	&#127829;</span>
                {"  "}
                {order.orderItems.map((item) => {
                  return (
                    <>
                     <li> <span style={{ color: "white"}}>{item.name} &nbsp; ₹ {item.price}</span> </li>
                      {"  "}
                    </>
                  );
                })}
              </div>
              <br></br> 
              <div>
                <span className="sideHead">Order Id:</span>
                {"  "}
                <span style={{ color: "white" }}>{order._id}</span>
              </div>
              <div>
                <span className="sideHead">Email:</span>
                {"  "}
                <span style={{ color: "white" }}>{order.email}</span>
              </div>
              <div>
                <span className="sideHead">User Id:</span>
                {"  "}
                <span style={{ color: "white" }}>{order.userid}</span>
              </div>
              <div>
                <span className="sideHead">Amount Paid:</span>
                {"  "}
                <span style={{ color: "white" }}> ₹{order.orderAmount}</span>
              </div>
              <div>
                <span className="sideHead">Date:</span>
                {"  "}
                <span style={{ color: "white" }}>
                  {order.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
            
          ) : (
            <h3></h3>
          );
        })}
      <h3 className="trackStatus">Tracking Status 	&#9200;</h3>
      {orders ? (
        orders.map((order) => {
          return order.transactionId === trackUser ? (
            order.isDelivered == "waiting" ? (
              <h6 style={{ color: "grey" }}>
                waiting{" "}
                <img
                  src="https://cdn4.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.jpg"
                  height="3%"
                  width="3%"
                />
              </h6>
            ) : order.isDelivered == "orderaccepted" ? (
              <>
                <h6 style={{ color: "green" }}>
                  waiting{" "}
                  <img
                   src="https://cdn4.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.jpg"
                   height="5%"
                   width="5%"
                  />
                </h6>
                <div style={{borderLeft:'3px solid green', height:'100px', width:'10%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>
                  order accepted{" "}
                  <img
                     src="https://cdn.vectorstock.com/i/thumb-large/15/05/green-tick-checkmark-icon-vector-22691505.webp"
                     height="5%"
                     width="5%"
                  />
                </h6>
              </>
            ) : order.isDelivered == "cooking" ? (
              <>
                <h6 style={{ color: "green" }}>
                  waiting
                  <img
                    src="https://cdn4.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.jpg"
                    height="5%"
                    width="5%"
                  />
                  
                </h6>
                <div style={{borderLeft:'3px solid green',height:'100px', width:'10%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>
                  order accepted
                  <img
                 src="https://cdn.vectorstock.com/i/thumb-large/15/05/green-tick-checkmark-icon-vector-22691505.webp"
                 height="5%"
                 width="5%"
                  />
                  
                </h6>
                <div style={{borderLeft:'3px solid green',height:'100px', width:'10%',margin:'0 auto'}}></div>
                <h6 style={{ color: "grey" }}>
                  cooking
                  <img
                    src="https://horton-stephens.com/site/assets/files/2105/10-making-pizza.gif"
                    height="5%"
                    width="5%"
                  />
                </h6>
              </>
            ) : order.isDelivered == "foodontheway" ? (
              <>
                <h6 style={{ color: "green" }}>
                  waiting
                  <img
                   src="https://cdn4.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.jpg"
                   height="5%"
                   width="5%"
                  />
                </h6>
                
                <div style={{borderLeft:'3px solid green',height:'100px', width:'10%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>order accepted<img
                    src="https://cdn.vectorstock.com/i/thumb-large/15/05/green-tick-checkmark-icon-vector-22691505.webp"
                    height="5%"
                    width="5%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'100px', width:'10%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>cooking<img
                  src="https://horton-stephens.com/site/assets/files/2105/10-making-pizza.gif"
                  height="5%"
                  width="5%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'100px', width:'10%',margin:'0 auto'}}></div>
                <h6 style={{ color: "grey" }}>Pizza on the way<img
                    src="https://media4.giphy.com/media/hWco3fzBujt2CqaQBB/giphy.gif"
                    height="9%"
                    width="9%"
                  /></h6>
              </>
            ) : (
              <>
                <h6 style={{ color: "green" }}>waiting<img
                    src="https://cdn4.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.jpg"
                    height="5%"
                    width="5%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'100px', width:'10%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" ,  marginLeft:'31px'}}>order accepted<img
                    src="https://cdn.vectorstock.com/i/thumb-large/15/05/green-tick-checkmark-icon-vector-22691505.webp"
                    height="5%"
                    width="5%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'100px', width:'10%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>cooking<img
                    src="https://horton-stephens.com/site/assets/files/2105/10-making-pizza.gif"
                    height="5%"
                    width="5%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'100px', width:'10%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" , marginLeft:'85px' }}>pizza on the way<img
                    src="https://media4.giphy.com/media/hWco3fzBujt2CqaQBB/giphy.gif"
                    height="9%"
                    width="9%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'100px', width:'10%', margin:'0 auto'}}></div>
                <h6 style={{ color: "green",  marginLeft:'31px' }}>delivered<img
                    src="https://media2.giphy.com/media/HOmEjR4AK4BUxdD77x/giphy.gif"
                    height="6%"
                    width="6%"
                  /></h6>
              </>
            )
          ) : (
            <h1></h1>
          );
        })
      ) : (
        <h1></h1>
      )}
      {console.log(orders)}

      {/*{filteredorder[0].isDelivered == 'waiting' ? (<h5>waiting</h5>) : filteredorder[0].isDelivered == 'orderaccepted' ? (<><h5>waiting</h5><h5>order accepted</h5></>) : filteredorder[0].isDelivered == 'cooking' ? (<><h5>waiting</h5><h5>order accepted</h5><h5>cooking</h5></>) : filteredorder[0].isDelivered == 'foodontheway' ? (<><h5>waiting</h5><h5>order accepted</h5><h5>cooking</h5><h5>food on the way</h5></>) : (<><h5>waiting</h5><h5>order accepted</h5><h5>cooking</h5><h5>food on the way</h5><h5>delivered</h5></>) 
        }*/}
    </div>
  );
}
