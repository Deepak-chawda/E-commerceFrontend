import React, { useState } from "react";
import Modal from "react-modal";
import "../admin/admin.css";
import addProduct from "../images/addProduct.svg";
import ReactTooltip from "react-tooltip";
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

function EditProfileModal({ updateProductsApi, itemId }) {
  const [editProfileUser, setProfileUser] = useState({
    userName: "",
    email: "",
    address: "",
    contact: "",
    profilePic:""
  });
  // handle change
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProfileUser({ ...editProfileUser, [name]: value });
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-color text-dark"
        data-tip="Edit profile"
        href="#/"
        // style={{ cursor: "pointer" }}
        onClick={
          openModal
          //   setProductAdmin({...editProductAdmin,
          //     ["productName"]:itemId.productName,
          //     ["price"]:itemId.price,
          //     ["discription"]:itemId.discription,
          //     ["picture"]: itemId.picture
          // })
        }
      >
        Edit profile
        <ReactTooltip place="top" type="dark" effect="solid" />
      </button>

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
            ×
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
                <h1 className="text-center">Edit Profile</h1>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputUserName" className="form-label ">
                      User Name
                    </label>
                    <input
                      type="text"
                      value={editProfileUser.productName}
                      name="userName"
                      onChange={handleProductChange}
                      className="form-control py-2 px-1 text-capitalize"
                      id="inputUserName"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputEmailId" className="form-label">
                      Email Id
                    </label>
                    <input
                      type="string"
                      onChange={handleProductChange}
                      name="email"
                      value={editProfileUser.email}
                      className="form-control py-2 px-1"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputAdress" className="form-label">
                      Address
                    </label>
                    <input
                      type="string"
                      onChange={handleProductChange}
                      name="discription"
                      value={editProfileUser.address}
                      className="form-control py-2 px-1 text-capitalize"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputPhone" className="form-label">
                   Phone no.
                    </label>
                    <input
                      type="string"
                      onChange={handleProductChange}
                      name="contact"
                      value={editProfileUser.contact}
                      className="form-control py-2 px-1 text-capitalize"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label">
                      Picture
                    </label>
                    <input
                      type="file"
                      onChange={handleProductChange}
                      name="picture"
                      value={editProfileUser.picture}
                      className="form-control py-2 px-1"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className=" d-grid text-center">
                    <button
                      type="button"
                      onClick={() => {
                        updateProductsApi(
                        editProfileUser,
                          closeModal
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
        </section>
      </Modal>
    </>
  );
}

export default EditProfileModal;
