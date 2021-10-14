import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "../admin/admin.css";
import addProduct1 from "../images/addProduct1.svg";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";

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

function EditProductModal({ editId, getProductsApi }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setPreview(null);
  }
  const fetcheditId = editId._id;
  const cloudId = editId.cloudinary_id
  // console.log("cloudId",cloudId)
  // console.log("fetcheditId for delete item",fetcheditId)
    // state for loader
    const [Isloader, setIsloader] = useState(false);
  const [preview, setPreview] = useState();
  const [editProductAdmin, setProductAdmin] = useState({
    productName: editId.productName,
    price: editId.price,
    discription: editId.discription,
    picture:editId.picture,
  });
  // console.log("picture",editProductAdmin.picture.public_id)
  // handle change
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductAdmin({ ...editProductAdmin, [name]: value });
    // console.log("edit prodict admin",editProductAdmin)
  };
  const updateSingleFile =(e)=>{
    if(e.target.files[0]){
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = ()=>{
        setPreview(reader.result);
        setProductAdmin({ ...editProductAdmin,["picture"] : reader.result})
      }
    }
  }
  // update product api
  const updateProductsApi = async (
    editProductAdmin,
    setProductAdmin,
    fetcheditId,
    getProductsApi
  ) => {
    // console.log("update data", editProductAdmin);
    // console.log("id", fetcheditId);
    const tokens = JSON.parse(localStorage.getItem("token"));
    // console.log(tokens);
    try {
      setIsloader(true);
      const response = await axios.put(
        `http://localhost:4000/api/update/product?_id=${fetcheditId}&cloudId=${cloudId}`,
        editProductAdmin,
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      );
      console.log("response", response);
      closeModal();
      setIsloader(false);
      getProductsApi();
      // alert(response.data.msg);
      toast.success(`${response.data.msg}✔️`, {
        theme: "colored",
      });
    } catch (error) {
      console.log("error=>", error);
      setIsloader(false);
      // alert(error.response.data.error);
    }
  };
  
  return (
    <>
      <a
        className="me-3 text-lg text-success"
        data-tip="Edit"
        // href="#/"
        style={{ cursor: "pointer" }}
        onClick={openModal}
      >
        <ReactTooltip place="top" type="dark" effect="solid" />
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="edit"
          className="svg-inline--fa fa-edit fa-w-18 "
          // role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
          ></path>
        </svg>
      </a>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <section className="">
          <button
            className="absolute bg-white border-0 mt-0  rounded-circle fa-3x"
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
            <div className="row align-items-center  my-auto mx-auto">
              <div className="col-md-6 col-lg-6 order-md-1 ">
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
                  src={addProduct1}
                  alt="image"
                  className="img-fluid  mw-lg-130 mb-6 mb-md-0 mb-2"
                />
              )}
              </div>
              <div className="col-md-6 col-lg-6 order-md-2">
                <h1 className="text-center">Edit Product</h1>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label ">
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={editProductAdmin.productName}
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
                      value={editProductAdmin.price}
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
                      value={editProductAdmin.discription}
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
                      onChange={updateSingleFile}
                      name="picture"
                      className="form-control py-2 px-1"
                      // autoComplete="off"
                      // required
                    />
                  </div>
                  <div className=" d-grid text-center">
                    <button
                      type="button"
                      onClick={() => {
                        updateProductsApi(
                          editProductAdmin,
                          // setProductAdmin,
                          closeModal,
                          fetcheditId,
                          getProductsApi
                        );
                      }}
                      className="btn btn-color d-flex justify-content-center align-items-center py-2"
                      disabled={Isloader}
                      
                    >
                      Edit
                      {Isloader && (
                      <div
                        className="spinner-border text-primary m-1"
                        role="status"
                        // style={{width: "50px;", height: "50px;"}}
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
        </section>
      </Modal>
    </>
  );
}
export default EditProductModal;
