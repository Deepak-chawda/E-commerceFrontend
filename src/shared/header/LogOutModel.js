import React,{useContext} from "react";
import {  useHistory } from "react-router-dom";
import {  toast } from 'react-toastify';
import userDetailContext from "../../useContext/TokenContext";

const LogOutModel = ({headerChange}) => {
  const userDetails = useContext(userDetailContext)
    const history = useHistory();
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <i className="icon-exclamation icon-4x text-danger"></i>
              <h3> You want to Logout</h3>
            </div>
            <div className="modal-footer border-top-0">
              <button
                type="button"
                className="btn btn-color"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  localStorage.clear();
                  history.push("/");
                  headerChange()
                  // userDetails.setcontextChange("hello")
                  toast.success("LogOut Successfull 👍", {
                    theme: "colored"
                  })
                }}
              >
                Conform
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogOutModel;
