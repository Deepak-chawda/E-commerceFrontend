import React, { useState } from "react";
import Modal from "react-modal";
import "../admin/admin.css";
import addProduct from "../images/addProduct.svg";
// import {  toast } from 'react-toastify';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-45%",
    margin: "10px",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "red"
  },
};
Modal.setAppElement("#root");

function AddProductModal(props) {
  // console.log("hello")

  // here is  add product by admin api
  const [addProductAdmin, setProductAdmin] = useState({
    productName: "",
    price: "",
    discription: "",

    picture: null,
  });
  // handle change
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductAdmin({ ...addProductAdmin, [name]: value });
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
          className=" bg-white border-0 d-flex justify-content-end mt-0 fa-3x"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>

        <div className="container ">
          <div className="row align-items-center  my-auto mx-auto">
            <div className="col-md-6 col-lg-6 order-md-1 ">
              <img
                src={addProduct}
                alt=""
                className="img-fluid  mw-lg-130 mb-6 mb-md-0 mb-2"
              />
            </div>
            <div className="col-md-6 col-lg-6 order-md-2">
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
                    onChange={handleProductChange}
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
                        addProductAdmin.discription === ""
                      ) {
                        return alert("plz fill all fields");
                      }
                      props.addProductApi(
                        addProductAdmin,
                        closeModal,
                        setProductAdmin
                      );
                    }}
                    className="btn btn-color py-3"
                  >
                    Add
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
