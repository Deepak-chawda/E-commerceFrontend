import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
// import {  toast } from 'react-toastify';

const ForgetPassModal = () => {
const [forgetMail,setforgetMail] = useState({
  email :""
})
// handle bar
const handleEmail =(e)=>{
  // const {name,value}=e.target
  setforgetMail({...forgetMail,[e.target.name]:e.target.value})

}
// console.log(forgetMail)
  const ForgfindMail = async () => {
    try {
      const response = await axios.post(`https://apple-e-commerce.herokuapp.com/email/finder`,forgetMail);
      toast.success(`${response.data.msg} 👍`, {
        theme: "colored"
      })
      console.log("response", response);
    } catch (error) {
      console.log("error ", error);
    }
  };

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
              <p className=" mb-1">
                Enter your registered email to change password
              </p>
              <label className=" mb-2" htmlFor="">
                Email id
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                onChange={handleEmail}
                id="emailidget"
              />
              <button
                type="button"
                data-dismiss="modal"
                className="btn btn-color w-100 form-control-lg  mt-md-4 mt-3 p-3"
                onClick={ForgfindMail}
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
