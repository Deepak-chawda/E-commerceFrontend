import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./order.css";
import emtyOrder from "../images/emtyOrder.png"
import appleWatch from "../images/apple_watch.jpeg";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";

const Order = () => {
  // state for loader
  const [Isloader, setIsloader] = useState(false);
  const history = useHistory();
  const [getOrder, setGetOrder] = useState([]);
  useEffect(() => {
    getOrderApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // call order  api
  const getOrderApi = async () => {
    setIsloader(true);
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      return history.push("/login");
    }
    // console.log("hello")
    try {
      const response = await axios.get(process.env.REACT_APP_ONRENDER + "api/get/order", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response);
      setIsloader(false);
      setGetOrder(response.data.data);
      // toast.info(`${response.data.msg} ☹️`, {
      //   theme: "colored",
      // });
    } catch (error) {
      setIsloader(false);
      console.log("error=>", error.response);
      alert(error.response.data.error);
    }
  };
  // order delete api
  const orderDeleteApi = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.delete(
        `https://apple-e-commerce.herokuapp.com/api/delete/order?_id=${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      getOrderApi();
      toast.success("Deleted order  Successfull👍", {
        theme: "colored",
      });
      // alert(response.data.msg);
    } catch (error) {
      console.log("error", error.response);
    }
  };
  return (
    <>
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center m-2 ">
            <div className="card p-0 m-0 pt-2 mb-4">
              <div className="card-body m-0 p-0 text-center">
                <div className="table-responsive">
                  <h2 className="fs-4 text-center">My All Order List</h2>
                  <table className="table table-hover  align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order date</th>
                        <th scope="col">Product Discription</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td className=" border-bottom-0" colSpan="6">
                          {Isloader && (
                            <>
                              <td
                                className="spinner-grow text-primary" colSpan="5"
                                style={{ width: "3rem", height: "3rem" }}
                                role="status"
                              >
                                <span className="visually-hidden">Loading...</span>
                              </td>

                            </>
                          )}

                        </td>
                      </tr>
                      {getOrder && getOrder.length !== 0 ? (
                        getOrder.map((item) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <img
                                    className="card-table-img img-fluid me-3"
                                    src={item?.product?.picture ? item?.product?.picture : appleWatch}
                                    alt="product-img"
                                    width="100"
                                  />
                                </td>
                                <td>{item?.product?.productName}</td>
                                <td>{item?.product?.price}</td>
                                <td>{item?.orderDate}</td>
                                <td>{item?.product?.discription}</td>
                                <td>
                                  <a
                                    className="text-lg text-danger"
                                    href="#!"
                                    data-tip="Delete"
                                    onClick={() => {
                                      orderDeleteApi(item._id);
                                    }}
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
                        <tr className="text-center">
                          <td className="fs-3 text-center" colSpan="6">
                            <img className="bg-light" src={emtyOrder} alt="emtyOrderImg" style={{ height: "200px", width: "300px" }} />
                            <p> Not Add order by user yet</p>
                            <button onClick={() => {
                              history.push("/")
                            }} className="btn btn-outline-warning rounded-pill">Shop now</button>

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
      </section>
    </>
  );
};

export default Order;
