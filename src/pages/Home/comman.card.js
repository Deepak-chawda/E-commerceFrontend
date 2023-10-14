import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Home/home.css";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
// import dateFormat from "dateformat";
// var now = Date.now();

const CommanCard = ({ Allitem }) => {
  // state for loader
  const [Isloader, setIsloader] = useState(false);
  // state for loader
  const [IsloaderO, setIsloaderO] = useState(false);
  const history = useHistory();
  // change text into capitelize
  const proName = Allitem.productName.toLowerCase();
  const newProductName =
    Allitem.productName.charAt(0).toUpperCase() + proName.slice(1);
  const disName = Allitem.discription.toLowerCase();
  const newdiscripName =
    Allitem.discription.charAt(0).toUpperCase() + disName.slice(1);
  // check log in our logout option
  const [checkLogin, setCheckLogin] = useState(null);
  useEffect(() => {
    setCheckLogin(JSON.parse(localStorage.getItem("token")));
  }, []);
  // call wishlist api
  const addToWishlist = async (_id) => {
    if (!checkLogin) {
      return history.push("/login");
    }
    try {
      setIsloader(true);
      const response = await axios.post(
        process.env.REACT_APP_ONRENDER + "api/add/wishlist",
        {
          productId: _id,
          user: JSON.parse(localStorage.getItem("userDetails"))._id,
        },
        {
          headers: {
            Authorization: `Bearer ${checkLogin}`,
          },
        }
      );
      setIsloader(false);
      toast.success("Successfull added in wish list ✔️", {
        theme: "colored",
      });
      console.log("response", response);
      // alert(response.data.msg);
    } catch (error) {
      setIsloader(false);
      console.log("error", error.response);
      // alert(error.response.data.error);
      toast.info(`${error.response.data.error} ❗`, {
        theme: "colored",
      });
    }
  };
  // call placeOrder api
  const placeOrder = async (_id) => {
    if (!checkLogin) {
      return history.push("/login");
    }
    try {
      setIsloaderO(true);
      const response = await axios.post(
        process.env.REACT_APP_ONRENDER + "api/add/order",
        {
          product: _id,
          orderDate: Date.now(),
          transactionId: uuidv4(),
          address: null,
          user: JSON.parse(localStorage.getItem("userDetails"))._id,
        },
        {
          headers: {
            Authorization: `Bearer ${checkLogin}`,
          },
        }
      );
      setIsloaderO(false);
      toast.success(`${response.data.msg}✔️`, {
        theme: "colored",
      });
      console.log("response", response);
      // alert(response.data.msg);
    } catch (error) {
      setIsloaderO(false);
      console.log("error=>", error.response);
      // alert(error.response.data.error);
      toast.info(`${error.response.data.error} ❗`, {
        theme: "colored",
      });
    }
  };
  return (
    <>
      <div className="card col-xl-3 col-lg-4 col-md-6 mb-3 m-2" style={{ maxWidth: " 280px" }}>
        <div className="row g-0 hover-shadow-lg hover-translate-y-n10">
          <div className="col-md-12 col-sm-12 align-content-center">
            <img
              src={
                Allitem.picture
                  ? Allitem.picture
                  : "https://cdn.pixabay.com/photo/2016/12/28/19/12/iphone-1936818_960_720.png"
              }
              className="img-fluid playhieght"
              alt="img"

            />
          </div>
          {/* <div className="col-md-6"> */}
          <div className="card-body p-2">
            <h5 className="card-title">{newProductName}</h5>
            <h5 className="card-title rup">{Allitem.price}</h5>
            <p className="card-text">{newdiscripName}</p>
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary p-2  d-flex justify-content-center align-items-center"
                disabled={IsloaderO}
                onClick={() => {
                  placeOrder(Allitem._id);
                }}
              >
                BUY NOW <i class="icon-shopping-cart fs-5 m-1"></i>
                {IsloaderO && (
                  <>
                    <div
                      className="spinner-border text-dark m-1"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </>
                )}
              </button>
              <button
                className="btn btn-danger p-2 d-flex justify-content-center align-items-center"
                disabled={Isloader}
                onClick={() => {
                  addToWishlist(Allitem._id);
                }}> WISHLIST <i class="icon-heart-empty fs-5 m-1"></i>
                {Isloader && (
                  <>
                    <div
                      className="spinner-border text-dark m-1"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </>
                )}
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default CommanCard;
