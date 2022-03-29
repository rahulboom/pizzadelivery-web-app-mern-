import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../actions/orderAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
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
    <div>
    
      <h2>Track Orders</h2>
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      {orders &&
        orders.map((order) => {
          return order.transactionId === trackUser ? (
            <div className="container text-left ">
              <div>
                {order.orderItems.map((item) => {
                  return (
                    <>
                      <span style={{ color: "red" }}>
                      <ul className="list-unstyled socila-list container">
                        <li><img src={item.image}   width="80" height="80" /> {item.name}</li>
                        </ul>
                      </span>
                      {"    "}
                    </>
                  );
                })}
              </div>
              <div>
                <span>Ordered Items:</span>
                {"  "}
                {order.orderItems.map((item) => {
                  return (
                    <>
                      <span style={{ color: "red" }}>{item.name}</span>
                      {"  "}
                    </>
                  );
                })}
              </div>
              <div>
                <span>Order Id:</span>
                {"  "}
                <span style={{ color: "red" }}>{order._id}</span>
              </div>
              <div>
                <span>Email:</span>
                {"  "}
                <span style={{ color: "red" }}>{order.email}</span>
              </div>
              <div>
                <span>User Id:</span>
                {"  "}
                <span style={{ color: "red" }}>{order.userid}</span>
              </div>
              <div>
                <span>Amount:</span>
                {"  "}
                <span style={{ color: "red" }}>{order.orderAmount}</span>
              </div>
              <div>
                <span>Status:</span>
                {"  "}
                <span style={{ color: "red" }}>
                  {order.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
          ) : (
            <h3></h3>
          );
        })}
      <h3>Tracking Status</h3>
      {orders ? (
        orders.map((order) => {
          return order.transactionId === trackUser ? (
            order.isDelivered == "waiting" ? (
              <h6 style={{ color: "grey" }}>
                waiting{" "}
                <img
                  src="https://cdn4.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.jpg"
                  height="2%"
                  width="2%"
                />
              </h6>
            ) : order.isDelivered == "orderaccepted" ? (
              <>
                <h6 style={{ color: "green" }}>
                  waiting{" "}
                  <img
                    src="https://cdn.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.webp"
                    height="3%"
                    width="3%"
                  />
                </h6>
                <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>
                  order accepted{" "}
                  <img
                    src="https://cdn.vectorstock.com/i/thumb-large/15/05/green-tick-checkmark-icon-vector-22691505.webp"
                    height="3%"
                    width="3%"
                  />
                </h6>
              </>
            ) : order.isDelivered == "cooking" ? (
              <>
                <h6 style={{ color: "green" }}>
                  waiting
                  <img
                    src="https://cdn4.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.jpg"
                    height="2%"
                    width="2%"
                  />
                  
                </h6>
                <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>
                  order accepted
                  <img
                    src="https://cdn1.vectorstock.com/i/thumb-large/15/05/green-tick-checkmark-icon-vector-22691505.jpg"
                    height="3%"
                    width="3%"
                  />
                  
                </h6>
                <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "grey" }}>
                  cooking
                  <img
                    src="https://cdn.vectorstock.com/i/thumb-large/81/48/cooking-pan-icon-vector-1838148.webp"
                    height="3%"
                    width="3%"
                  />
                </h6>
              </>
            ) : order.isDelivered == "foodontheway" ? (
              <>
                <h6 style={{ color: "green" }}>
                  waiting
                  <img
                    src="https://cdn4.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.jpg"
                    height="2%"
                    width="2%"
                  />
                </h6>
                
                <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>order accepted<img
                    src="https://cdn.vectorstock.com/i/thumb-large/15/05/green-tick-checkmark-icon-vector-22691505.webp"
                    height="3%"
                    width="3%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>cooking<img
                    src="https://cdn.vectorstock.com/i/thumb-large/81/48/cooking-pan-icon-vector-1838148.webp"
                    height="3%"
                    width="3%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "grey" }}>food on the way<img
                    src="https://cdn.vectorstock.com/i/thumb-large/93/85/scooter-delivery-man-delivers-a-parcel-in-city-vector-37489385.webp"
                    height="6%"
                    width="6%"
                  /></h6>
              </>
            ) : (
              <>
                <h6 style={{ color: "green" }}>waiting<img
                    src="https://cdn4.vectorstock.com/i/thumb-large/89/48/hourglass-icon-waiting-symbol-loading-time-vector-40708948.jpg"
                    height="2%"
                    width="2%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>order accepted<img
                    src="https://cdn.vectorstock.com/i/thumb-large/15/05/green-tick-checkmark-icon-vector-22691505.webp"
                    height="3%"
                    width="3%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>cooking<img
                    src="https://cdn.vectorstock.com/i/thumb-large/81/48/cooking-pan-icon-vector-1838148.webp"
                    height="3%"
                    width="3%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>food on the way<img
                    src="https://cdn.vectorstock.com/i/thumb-large/93/85/scooter-delivery-man-delivers-a-parcel-in-city-vector-37489385.webp"
                    height="6%"
                    width="6%"
                  /></h6>
                  <div style={{borderLeft:'3px solid green', height:'200px', width:'20%',margin:'0 auto'}}></div>
                <h6 style={{ color: "green" }}>delivered<img
                    src="https://cdn.vectorstock.com/i/thumb-large/95/33/delivery-handover-isometric-co-vector-34559533.webp"
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
