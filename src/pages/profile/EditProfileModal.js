import React, { useState } from "react";
import Modal from "react-modal";
import "../admin/admin.css";
import addProduct from "../images/Editprofile.svg";
import ReactTooltip from "react-tooltip";
import axios from "axios";
import { toast } from "react-toastify";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-45%",
    margin: "10px",
    padding: "0px",
    width: "70%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
function EditUserProfile({getUserDetails}) {
  // state for loader
  const [Isloader, setIsloader] = useState(false);
  const [preview, setPreview] = useState();

  const localUser = JSON.parse(localStorage.getItem("userDetails"));

  const [editProfileUser, setProfileUser] = useState({
    userName: localUser.userName,
    email: localUser.email,
    address: localUser.address,
    contact: localUser.contact,
    profilePic: localUser.profilePic,
  });
  const cloudId = localUser.cloudinary_id;
  // console.log("cloudId=",cloudId)
  // handle change
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProfileUser({ ...editProfileUser, [name]: value });
  };
  // handle bar for file upload
  const uploadSingleFile = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        // console.log("reader result", reader.result);
        setPreview(reader.result);
        setProfileUser({ ...editProfileUser, ["profilePic"]: reader.result });
      };
    }
  };
  // call edit user details Api
  const EditUserProfileApi = async (id, editProfileUser, closeModal,getUserDetails) => {
    try {
      setIsloader(true);
      const response = await axios.put(
        `https://apple-e-commerce.herokuapp.com/api/editPofile/details?_id=${id}&cloudId=${cloudId}`,
        editProfileUser
      );
      console.log("update user details data", response);
      // alert(response.data.msg)
      setIsloader(false);
      closeModal();
      getUserDetails()
      toast.success(`${response.data.msg}✔️`, {
        theme: "colored",
      });
    } catch (error) {
      console.log("error=>", error.response);
      setIsloader(false);
      toast.error(`${error.response.data.msg}'❌'`, {
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
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-color text-dark"
        data-tip="Edit profile"
        href="#/"
        onClick={openModal}
        
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
          <div className="container p-0">
            {/* align-items-center  */}
            <div className="row align-items-center mx-auto p-0">
              <div className=" col-md-6 col-lg-6	d-none d-lg-block d-md-none">
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
                <div className="d-flex justify-content-end align-items-end">
                  <button
                    className="bg-white border-0 mt-0  rounded-circle fa-3x p-0s"
                    onClick={closeModal}
                    style={{
                      fontSize : "25px"
                    }}
                  >
                    ×
                  </button>
                </div>
                <h4 className="text-center">Edit Profile</h4>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputUserName" className="form-label ">
                      User Name
                    </label>
                    <input
                      type="text"
                      value={editProfileUser.userName}
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
                      name="address"
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
                      onChange={uploadSingleFile}
                      name="profilePic"
                      className="form-control py-2 px-1"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className=" d-grid text-center">
                    <button
                      type="button"
                      onClick={() => {
                        EditUserProfileApi(
                          localUser._id,
                          editProfileUser,
                          closeModal,
                          getUserDetails
                        );
                      }}
                      className="btn btn-color py-3 mb-4 d-flex justify-content-center align-items-center"
                      disabled={Isloader}
                    >
                      Edit Profile
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
        </section>
      </Modal>
    </>
  );
}

export default EditUserProfile;
