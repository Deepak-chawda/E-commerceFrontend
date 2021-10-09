import React from "react";
// import {  toast } from 'react-toastify';

const ForgetPassModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center p-4">
              <i className="icon-unlock icon-4x text-danger"></i>
              <h3>Forgot password ?</h3>
              <p className=" mb-1">Enter your registered email to change password</p>
              <label className=" mb-2" htmlFor="">
                Email id
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="forgotEmail"
                // value=""
              />
              <button
                type="button"
                data-dismiss="modal"
                className="btn btn-color w-100 form-control-lg  mt-md-4 mt-3 p-3"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassModal;
