import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./wishlist.css";
import appleWatch from "../images/apple_watch.jpeg";
import ReactTooltip from "react-tooltip";

const Wishlist = () => {
  const history = useHistory();
  const [getWishlist, setWishlist] = useState([]);
  useEffect(() => {
    getWishlistApi();
  }, []);
  // call wishlist   api
  const getWishlistApi = async () => {
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
      setWishlist(response.data.data);
    } catch (error) {
      console.log("error=>", error.response);
      alert(error.response.data.error);
    }
  };
  return (
    <>
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center m-2 ">
            {/* <h2 className="m-3 text-center">MY ORDER</h2> */}
            <div className="card p-0 m-0 pt-2 mb-4">
              {/* <div className="p-4">
                <h2 className="">PRODUCT</h2>
                <AddProductModal addProductApi ={addProductApi}  />
              </div> */}
              <div className="card-body m-0 p-0 text-center">
                <div className="table-responsive">
                  <h2 className="fs-4 text-center">My All Wish List</h2>
                  <table className="table table-hover  align-middle">
                    <thead className="table-dark">
                      <tr>
                        {/* <th className="fs-4 text-center">My All Order List</th> */}
                        {/* <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="#">Clear Wishlist</a></th> */}
                      </tr>
                      <tr>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col rupes">Price</th>
                        <th scope="col">Product Discription</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
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
                                <td>{item.product.productName}</td>
                                <td>{item.product.price}</td>
                                <td>{item.product.discription}</td>
                                <td>
                                  <a className="text-lg text-danger" href="#!" data-tip="Delete">
                                  <ReactTooltip place="top" type="dark" effect="solid" />
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
                        <div className="fs-3 text-center">
                          Not add order by user yet
                        </div>
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

export default Wishlist;
