import axios from "axios";
import React, { useEffect, useState } from "react";
import "../admin/admin.css";
import appleWatch from "../images/apple_watch.jpeg";
import AddProductModal from "./add.product.model";
import DeleteProductAdmin from "./delete.product.admin";
import EditProductModal from "./edit.product.model";
import { toast } from "react-toastify";

const AdminHome = () => {
  // state for loader
  const [Isloader, setIsloader] = useState(false);
  // here is a get admin all product api
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProductsApi();
  }, []);
  // get all product by adm
  const getProductsApi = async () => {
    setIsloader(true);
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
      // console.log("get admin data response", response.data.data);
      setProductData(response.data.data);
      setIsloader(false);
    } catch (error) {
      setIsloader(false);
      console.log("error=>", error.response);
      // alert(error.response.data.error);
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
      setIsloader(true);
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
      // alert(response.data.msg);
      // remove value after add product
      setProductAdmin({
        ...addProductAdmin,
        productName: "",
        price: "",
        discription: "",
      });
      setIsloader(false);
      closeModal();
      getProductsApi();
      toast.success(`${response.data.msg}✔️`, {
        theme: "colored",
      });
    } catch (error) {
      console.log("error", error.response);
      setIsloader(false);
      // alert(error.response.data.error);
      toast.error(`${error.response.data.msg}'❌'`, {
        theme: "colored",
      });
    }
  };

  return (
    <>
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center m-2 ">
            <h2 className="m-3 text-center">All PRODUCT IN STORE</h2>
            <div className="card p-0 m-0 pt-2 mb-4">
              <div className="table-responsive p-4">
                <h2 className="">ADD PRODUCT ADMIN</h2>
                <AddProductModal addProductApi={addProductApi} Isloader={Isloader} />
              </div>
              <div className="card-body m-0 p-0 text-center">
                <div className="table-responsive">
                <table className="table table-hover  align-middle">
                  <thead className="table-dark ">
                    <tr>
                      <th scope="col">S.N.</th>
                      <th scope="col">
                        <i className="icon-picture"></i> Product Image
                      </th>
                      <th scope="col">
                        <i className="icon-gift"></i> Product Name
                      </th>
                      <th scope="col">
                        <i className="icon-inr"></i> Price
                      </th>
                      <th scope="col">
                        <i className="icon-calendar"></i> Order date
                      </th>
                      <th scope="col">
                        <i className="icon-edit"></i> Product Discription
                      </th>
                      <th scope="col">
                        <i className="icon-pushpin"></i> Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center border-bottom-0" colSpan="7">
                        {Isloader && (
                          <>
                            <tr
                              className="spinner-grow text-primary  "
                              style={{ width: "3rem", height: "3rem" }}
                              role="status"
                            >
                              <td className="visually-hidden">Loading...</td>
                            </tr>
                            <p>Loading...</p>
                          </>
                        )}
                      </td>
                    </tr>
                    {productData && productData.length !== 0 ? (
                      productData.map((item, index) => {
                        return (
                          <>
                            <tr>
                              <th scope="row">{index + 1}</th>
                              <td>
                                <img
                                  className="card-table-img img-fluid me-3"
                                  src={item.picture ? item.picture:appleWatch}
                                  alt="product-img"
                                  width="100"
                                />
                              </td>
                              <td>{item.productName}</td>
                              <td>{item.price}</td>
                              <td>{Date.now()}</td>
                              <td>{item.discription}</td>
                              <td>
                                <EditProductModal
                                  key={item._id}
                                  editId={item}
                                  getProductsApi={getProductsApi}
                                />
                                <DeleteProductAdmin
                                  key={item}
                                  itemId={item._id}
                                  getProductsApi={getProductsApi}
                                />
                              </td>
                            </tr>
                          </>
                        );
                      })
                    ) : (
                      <tr >
                        <td className=" text-danger text-center border-bottom-0" colSpan="7">
                          <h3>No Data add yet</h3>
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

export default AdminHome;
