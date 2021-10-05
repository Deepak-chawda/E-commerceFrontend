import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./wishlist.css";
import { v4 as uuidv4 } from "uuid";
import appleWatch from "../images/apple_watch.jpeg";
import ReactTooltip from "react-tooltip";
import {  toast } from 'react-toastify';

const Wishlist = () => {
  // state for loader
  const [Isloader, setIsloader] = useState(true);
  const history = useHistory();
  const [getWishlist, setWishlist] = useState([]);
  useEffect(() => {
    getWishlistApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // call wishlist   api
  const getWishlistApi = async () => {
    setIsloader(true)
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      return history.push("/login");
    }
    try {
      const response = await axios.get(
        "http://localhost:4000/api/get/wishlist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      setIsloader(true)
      setWishlist(response.data.data);
    } catch (error) {
      setIsloader(true)
      console.log("error=>", error.response);
      alert(error.response.data.error);
    }
  };
  // here is a wishlist delete api
  const wishlistDeleteApi = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/delete/wishlist?_id=${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      getWishlistApi();
      toast.success("Deleted Successfull from wishlist 👍", {
        theme: "colored"
      })
      // alert(response.data.msg);
    } catch (error) {
      console.log("error", error.response);
    }
  };
  // call placeOrder api
  const placeOrder = async (item) => {
    const itemId = item._id;
    const itempro = item.product._id;
    // console.log("id",_id)
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.post(
        "http://localhost:4000/api/add/order",
        {
          product: itempro,
          orderDate: Date.now(),
          transactionId: uuidv4(),
          address: null,
          user: JSON.parse(localStorage.getItem("userDetails"))._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      wishlistDeleteApi(itemId);
      toast.success("Placed order Successfull 👍", {
        theme: "colored"
      })
      // alert(response.data.msg);
    } catch (error) {
      console.log("error=>", error.response);
      alert(error.response.data.error)
    }
  };
  return (
    <>
      <div className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center m-2 ">
            <div className="card p-0 m-0 pt-2 mb-4">
              <div className="card-body m-0 p-0 text-center">
                <div className="table-responsive">
                  <h2 className="fs-4 text-center">My All Wish List</h2>
                  <table className="table table-hover  align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Product Discription</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-center " >
                      {/* {Isloader && (
                        <>
                        <tr className="text-center" >
                          <td
                            className="spinner-border text-primary"
                            role="status"
                            colSpan="3"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </td>
                          </tr>
                        </>
                      )} */}
                      {getWishlist && getWishlist.length !== 0 ? (
                        getWishlist.map((item) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <img
                                    className="card-table-img img-fluid me-3"
                                    src={appleWatch}
                                    alt="product-img"
                                    width="100"
                                  />
                                </td>
                                <td>{item?.product?.productName}</td>
                                <td>{item?.product?.price}</td>
                                <td>{item?.product?.discription}</td>
                                <td>
                                  <a
                                    className="me-3 text-lg text-success"
                                    data-tip="Place Order"
                                    href="#/"
                                    onClick={() => {
                                      placeOrder(item);
                                    }}
                                  >
                                    <i className="icon-shopping-cart icon-2x"></i>
                                  </a>
                                  <a
                                    className="text-lg text-danger"
                                    onClick={() => {
                                      wishlistDeleteApi(item._id);
                                    }}
                                    href="#!"
                                    data-tip="Delete"
                                  >
                                    <ReactTooltip
                                      place="top"
                                      type="dark"
                                      effect="solid"
                                    />
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-prefix="far"
                                      data-icon="trash-alt"
                                      className="svg-inline--fa fa-trash-alt fa-w-14 "
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                                      ></path>
                                    </svg>
                                  </a>
                                </td>
                              </tr>
                            </>
                          );
                        })
                      ) : (
                        <tr>
                        <td className=" text-danger text-center" colSpan="5">
                          <h3>No Data add yet</h3>
                          {Isloader && (
                            <>
                              <tr
                                className="spinner-grow text-primary"
                                style={{ width: "3rem", height: "3rem" }}
                                role="status"
                              >
                                <td className="visually-hidden">
                                  Loading...
                                </td>
                              </tr>
                            </>
                          )}
                        </td>
                      </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
