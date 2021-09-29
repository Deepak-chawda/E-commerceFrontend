import axios from "axios";
import React, { useEffect, useState } from "react";
import "../admin/admin.css"
import appleWatch from "../images/apple_watch.jpeg";
import AddProductModal from "./add.product.model";
import DeleteProductAdmin from "./delete.product.admin";
import EditProductModal from "./edit.product.model";

const AdminHome = () => {
  // here is a get admin all product api
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProductsApi();
  },[]);
  // get all product by admin
  const getProductsApi = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.get(
        "http://localhost:4000/api/get/admin/product",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
// get admin all data
      // console.log("get admin data response", response);
      setProductData(response.data.data);
    } catch (error) {
      console.log("error=>", error.response);
      alert(error.response.data.error);
    }
  };
  // add product api
  const addProductApi = async (
    addProductAdmin,
    closeModal,
    setProductAdmin
  ) => {
    const token = JSON.parse(localStorage.getItem("token"));

    try {
      const response = await axios.post(
        "http://localhost:4000/api/add/product",
        addProductAdmin,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      alert(response.data.msg)
      // remove value after add product
      setProductAdmin({
        ...addProductAdmin,
        productName: "",
        price: "",
        discription: "",
      });
      closeModal();
      getProductsApi();
    } catch (error) {
      console.log("error", error.response);
      alert(error.response.data.error);
    }
  };
  // delete product api

 


  // update product api
  //   useState for store  edit id
  // const [editId,seteditId]=useState()
  
  const updateProductsApi = async (editProductAdmin,closeModal,iditem) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.put(
        `http://localhost:4000/api/update/product?_id=${iditem}`,
        {editProductAdmin},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      closeModal();
      getProductsApi();
    } catch (error) {
      console.log("error", error.response);
      alert(error.response.data.error);
    }
  };
  return (
    <>
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center m-2 ">
            <h2 className="m-3 text-center">All PRODUCT IN STORE</h2>
            <div className="card p-0 m-0 pt-2 mb-4">
              <div className="p-4">
                <h2 className="">ADD PRODUCT ADMIN</h2>
                <AddProductModal addProductApi={addProductApi} />
              </div>

              <div className="card-body m-0 p-0 text-center">
                <div className="table-responsive">
                  <table className="table table-hover  align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">S.N.</th>
                        <th scope="col"><i className="icon-picture"></i> Product Image</th>
                        <th scope="col"><i className="icon-gift"></i> Product Name</th>
                        <th scope="col"><i className="icon-inr"></i> Price</th>
                        <th scope="col"> <i className="icon-calendar"></i> Order date</th>
                        <th scope="col"><i className="icon-edit"></i> Product Discription</th>
                        <th scope="col"><i className="icon-pushpin"></i> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData && productData.length !== 0
                        ? productData.map((item, index) => {
                            return (
                              <>
                                <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>
                                    <img
                                      className="card-table-img img-fluid me-3"
                                      src={appleWatch}
                                      alt="product-img"
                                      width="100"
                                    />
                                  </td>
                                  <td>{item.productName}</td>
                                  <td>{item.price}</td>
                                  <td>22/07/2000</td>
                                  <td>{item.discription}</td>
                                  <td>
                                    <EditProductModal updateProductsApi={updateProductsApi}  key={item._id} itemId={item}/>
                                    <DeleteProductAdmin itemId={item._id} getProductsApi={getProductsApi} />
                                  </td>
                                </tr>
                              </>
                            );
                          })
                        : "No Data add yet"}
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

export default AdminHome;
