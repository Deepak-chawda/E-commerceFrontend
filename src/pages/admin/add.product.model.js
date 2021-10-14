import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "../admin/admin.css";
import addProduct from "../images/addProduct.svg";
import {  toast } from 'react-toastify';

const customStyles = {
  content: {

    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-45%",
    margin: "10px",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
function AddProductModal({getProductsApi }) {
  // state for loader
  const [Isloader, setIsloader] = useState(false);
  const [preview, setPreview] = useState();
  // here is  add product by admin api
  const [addProductAdmin, setProductAdmin] = useState({
    productName: "",
    price: "",
    discription: "",
    picture: "",
  });
  // handle change
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductAdmin({ ...addProductAdmin, [name]: value });
  };
  // handle bar for file upload
  const uploadSingleFile = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        // console.log("reader result", reader.result);
        setPreview(reader.result);
        setProductAdmin({ ...addProductAdmin, ["picture"]: reader.result });
      };
    }
  };
  // add product api
  const addProductApi = async (
    // addProductAdmin,
    // closeModal,
    // setProductAdmin
  ) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      console.log(addProductAdmin)
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
      // console.log("response", response);
      // alert(response.data.msg);
      // remove value after add product
      setProductAdmin({
        ...addProductAdmin,
        productName: "",
        price: "",
        discription: "",
        picture: "",
      });
      console.log(response)
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
      toast.error(`${error.response.data.msg}`, {
        theme: "colored",
      });
    }
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setPreview(null);
  }
  return (
    <div>
      <button type="button" className="btn btn-info " onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>{" "}
        Add Product
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="bg-white border-0 d-flex justify-content-end mt-0 fa-3x"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>

        <div className="container ">
          <div className="row align-items-center  my-auto mx-auto ">
            <div className="col-md-6 col-lg-6  imgmedia">
              {preview ? (
                <>
                  <p className="p-0 m-0">Pre-view</p>
                  <img
                    src={preview}
                    alt="image"
                    className="img-fluid  mw-lg-130 mb-6 mb-md-0 mb-2"
                  />
                </>
              ) : (
                <img
                  src={addProduct}
                  alt="image"
                  className="img-fluid  mw-lg-130 mb-6 mb-md-0 mb-2"
                />
              )}
            </div>
            <div className="col-md-12 col-lg-6">
              <h2 className="text-center">Add More New Product</h2>
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label ">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    onChange={handleProductChange}
                    className="form-control py-2 px-1 text-capitalize"
                    id="inputEmail4"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputPassword4" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    onChange={handleProductChange}
                    name="price"
                    className="form-control py-2 px-1"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputPassword4" className="form-label">
                    Discription
                  </label>
                  <input
                    type="text"
                    onChange={handleProductChange}
                    name="discription"
                    className="form-control py-2 px-1 text-capitalize"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputPassword4" className="form-label">
                    Picture
                  </label>
                  <input
                    type="file"
                    onChange={uploadSingleFile}
                    name="picture"
                    className="form-control py-2 px-1"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className=" d-grid text-center">
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        addProductAdmin.productName === "" ||
                        addProductAdmin.price === "" ||
                        addProductAdmin.discription === "" ||
                        addProductAdmin.picture === ""
                      ) {
                        return  toast.error(`${"plz fill all require fields"} ❗`, {
                          theme: "colored",
                        });
                      }
                      addProductApi(
                        // addProductAdmin,
                        // closeModal,
                        // setProductAdmin
                      );
                    }}
                    className="btn btn-color d-flex justify-content-center align-items-center py-3 btnqrery "
                    disabled={Isloader}
                  >
                    Add
                    {Isloader && (
                      <div
                        className="spinner-border text-primary m-1"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default AddProductModal;
