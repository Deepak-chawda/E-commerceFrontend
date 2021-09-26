import React,{useState,useEffect} from "react";
import axios from "axios";
import "../Home/home.css";
import {useHistory} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
// import dateFormat from "dateformat";
// var now = Date.now();


const CommanCard = ({Allitem}) => {
  
  const history =useHistory()
  // change text into capitelize
  const proName = Allitem.productName.toLowerCase()
  const newProductName= Allitem.productName.charAt(0).toUpperCase()+proName.slice(1)
  const disName = Allitem.discription.toLowerCase()
  const newdiscripName= Allitem.discription.charAt(0).toUpperCase()+disName.slice(1)
  // check log in our logout option
  const [checkLogin,setCheckLogin]=useState(null)
  useEffect(()=>{
setCheckLogin(JSON.parse(localStorage.getItem("token")))
  },[])
    // call wishlist api
  const addToWishlist=async( _id)=>{
    if(!checkLogin){
      return history.push("/login")
    }
      try {
        const response = await axios.post(
          "http://localhost:4000/api/add/wishlist",{
            productId : _id,
            user : JSON.parse(localStorage.getItem("userDetails"))._id,
          },
          {
            headers: {
              Authorization: `Bearer ${checkLogin}`,
            },
          }
        );
  
        console.log("response", response);
        alert(response.data.msg)
      } catch (error) {
        console.log("error", error.response);
        alert(error.response.data.error)
      }
    }
// call placeOrder api
const placeOrder = async(_id)=>{

  if(!checkLogin){
    return history.push("/login")
  }
  try {
    const response = await axios.post(
      "http://localhost:4000/api/add/order",{
        product : _id,
        orderDate : Date.now(),
        transactionId  : uuidv4(),
        address : null,
        user : JSON.parse(localStorage.getItem("userDetails"))._id
      },
      {
        headers: {
          Authorization: `Bearer ${checkLogin}`,
        },
      }
    );

    console.log("response", response)
    alert(response.data.msg)
  } catch (error) {
    console.log("error=>", error.response);
    // alert(error.response.data.error)
  }
}
  return (
    <>
      <div className="card mb-3 m-3  " style={{ maxWidth: " 400px" }}>
        <div className="row g-0 hover-shadow-lg hover-translate-y-n10">
          <div className="col-md-6 col-sm-5">
            <img
              src="https://cdn.pixabay.com/photo/2016/12/28/19/12/iphone-1936818_960_720.png"
              className="img-fluid rounded-start p-2 "
              alt="img"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title" >{newProductName }</h5>
              <h4 className="card-title rup" >{Allitem.price}</h4>
              <p className="card-text">
                {newdiscripName}
              </p>
              <button   className="btn btn-primary m-2 d-grid" onClick={()=>{
               placeOrder(Allitem._id)
              }}>
                Place Order
              </button>
              <button  className="btn btn-danger m-2 d-grid" onClick={()=>{
                addToWishlist(Allitem._id)
              }}>
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommanCard;
