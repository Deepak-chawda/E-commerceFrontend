import React, { useState } from "react";
// install axios and require here
import axios from "axios";
// here use hook for routing page
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../signup/signup.css";
import signup1 from "../images/signup1.svg";
import { toast } from "react-toastify";
const Signup = () => {
  //loader state
  const [Isloader, setIsloader] = useState(false);
  // here call useHistory function for using..use to routing for btw diff componets
  const history = useHistory();
  // user inicial state
  const [userDetails, setDetails] = useState({
    email: "",
    password: "",
    userName: "",
    address: "",
    contact: "",
    profilePic: "",
    cloudinary_id: null
  });
  // handle Change
  const handlesignupChange = (e) => {
    const { name, value } = e.target; // object destructuring
    setDetails({ ...userDetails, [name]: value });
  };
  const signupApi = async () => {
    console.log("userDetails=", userDetails);
    try {
      // alert massage for fill all field
      if (
        userDetails.email === "" ||
        userDetails.password === "" ||
        userDetails.userName === ""
      ) {
        return toast.error("Plz fill all fields", {
          theme: "colored",
        });
      }

      if(userDetails.password.length<=8)
      {
        return toast.error("password must be 8 charactor", {
          theme: "colored",
        });
      }
      setIsloader(true);
      const response = await axios.post(
        "http://localhost:4000/api/signup?isAdmin=false",
        userDetails
      );
      setIsloader(false);
      console.log("response =", response);
      toast.success("Signup Successfull 👍", {
        theme: "colored",
      });
      history.push("/login");
    } catch (error) {
      setIsloader(false);
      console.log("error", error);
      // error showing in front end
      alert(error.response.data.error);
    }
  };
  return (
    <>
\
        <div className="container ">
          
          <div className="py-4 p-sm-5">
            <div className="row align-items-center mx-auto m-4">
              <div className="col-md-6 col-lg-7 order-md-1 pe-4">
                <img
                  src={signup1}
                  alt=""
                  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 mb-2"
                />
              </div>
              <div className="col-md-6 col-lg-5 order-md-2">
              <h2 className="text-center pb-2">Sign up Form</h2>
                <form className=" input-group row g-3">
                  <div className="col-md-12">
                    <label
                      htmlFor="inputUserName"
                      className="form-label fa-1x fw-bold mx-3"
                    >
                      User Name
                    </label>
                    <input
                      type="string"
                      name="userName"
                      onChange={handlesignupChange}
                      className="form-control py-3 px-3 rounded-pill"
                      id="inputUserName"
                    />
                  </div>
                  <div className="col-md-12">
                    <label
                      htmlFor="inputEmail4"
                      className="form-label fa-1x fw-bold mx-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handlesignupChange}
                      className="form-control py-3 px-3 rounded-pill"
                      id="inputEmail4"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample1"
                      aria-controls="collapseExample1"
                    />
                    <p
                      className="collapse mb-0 text-danger"
                      id="collapseExample1"
                    >
                      You must include "@" in your mail address !
                    </p>
                  </div>

                  <div className="col-md-12">
                    <label
                      htmlFor="inputPassword4"
                      className="form-label fa-1x fw-bold mx-3"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={handlesignupChange}
                      minLength="8"
                      className="form-control py-3 px-3 rounded-pill"
                      id="inputPassword4"
                      autoComplete="off"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-controls="collapseExample2"
                      required
                    />
                   {userDetails.password.length>= 8 && ( <p
                      className="mb-0 text-success"
                      id="collapseExample"
                    >
                      Strong password
                    </p>) 
                    || ( <p
                      className=" collapse mb-0 text-danger"
                      id="collapseExample"
                    >
                    Password must be 8 charactor !
                    </p>)
                    }
                  </div>
                  <div className="col-12">
                    <div className="form-check mx-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        // checked={false}
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        &nbsp; I agree to all &nbsp;
                      </label>
                      <a
                        data-bs-target="#exampleModal2"
                        data-bs-toggle="modal"
                        data-backdrop="static"
                        data-keyboard="false"
                        href="#/"
                        className="norm"
                      >
                        Terms and Conditions .
                      </a>
                      <div
                        className="modal fade "
                        id="exampleModal2"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-scrollable">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title m-auto text-center"
                                id="exampleModalLabel2"
                              >
                                TERMS OF SERVICE AGREEMENT
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <strong>
                                {" "}
                                <span className="e">I</span>phone shop Terms of
                                Use
                              </strong>
                              <br /> This document is an electronic record in
                              terms of Information Technology Act, 2000 and
                              rules there under as applicable and the amended
                              provisions pertaining to electronic records in
                              various statutes as amended by the Information
                              Technology Act, 2000. This electronic record is
                              generated by a computer system and does not
                              require any physical or digital signatures.
                              <br />
                              <br />
                              This document is published in accordance with the
                              provisions of Rule 3 (1) of the Information
                              Technology (Intermediaries guidelines) Rules, 2011
                              that require publishing the rules and regulations,
                              privacy policy and Terms of Use for access or
                              usage of domain name
                              [www.flipkart.com][www.flipkart.com] (“Website”),
                              including the related mobile site and mobile
                              application (hereinafter referred to as
                              “Platform”) <br />
                              <br />
                              The Platform is owned by Flipkart Internet Private
                              Limited a company incorporated under the Companies
                              Act, 1956 with its registered office at Buildings
                              Alyssa, Begonia & Clover, Embassy Tech Village,
                              Outer Ring Road, Devarabeesanahalli Village,
                              Bengaluru – 560103, Karnataka, India and its
                              branch offices at 2nd Floor, Block F (Flora),
                              Embassy Tech Village, Outer Ring Road,
                              Devarabeesanahalli Village, Bengaluru-560103,
                              Karnataka, India and; 447/C, 12th Main, 4th Block,
                              Koramangala, Bengaluru-560034, Karnataka, India
                              (hereinafter referred to as "Flipkart"). <br />
                              <strong>
                                ACCESSING, BROWSING OR OTHERWISE USING THE SITE
                                INDICATES YOUR AGREEMENT TO ALL THE TERMS AND
                                CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE
                                READ THE TERMS OF USE CAREFULLY BEFORE
                                PROCEEDING
                              </strong>{" "}
                              . By impliedly or expressly accepting these Terms
                              of Use, You also accept and agree to be bound by
                              Flipkart Policies ((including but not limited to
                              Privacy Policy available at Privacy) as amended
                              from time to time. <br />
                              <br />
                              <strong>Membership Eligibility</strong> <br />
                              <br />
                              Transaction on the Platform is available only to
                              persons who can form legally binding contracts
                              under Indian Contract Act, 1872. Persons who are
                              "incompetent to contract" within the meaning of
                              the Indian Contract Act, 1872 including
                              un-discharged insolvents etc. are not eligible to
                              use the Platform. If you are a minor i.e. under
                              the age of 18 years, you may use the Platform or
                              access content on the Platform only under the
                              supervision and prior consent/ permission of a
                              parent ormlegal guardian. As a minor if you wish
                              to transact on the Platform, such transaction on
                              the Platform may be made by your legal guardian or
                              parents. Flipkart reserves the right to terminate
                              your membership and / or refuse to provide you
                              with access to the Platform if it is brought to
                              Flipkart's notice or if it is discovered that You
                              are under the age of 18 years and transacting on
                              the Platform. <br />
                              <strong>Your Account and Registration</strong>
                              <br />
                              Obligations If You use the Platform, You shall be
                              responsible for maintaining the confidentiality of
                              your Display Name and Password and You shall be
                              responsible for all activities that occur under
                              your Display Name and Password. You agree that if
                              You provide any information that is untrue,
                              inaccurate, not current or incomplete or We have
                              reasonable grounds to suspect that such
                              information is untrue, inaccurate, not current or
                              incomplete, or not in accordance with the this
                              Terms of Use, We shall have the right to
                              indefinitely suspend or terminate or block access
                              of your membership on the Platform and refuse to
                              provide You with access to the Platform.
                              <br />
                              <strong>Communications</strong>
                              <br />
                              When You use the Platform or send emails or other
                              data, information or communication to us, You
                              agree and understand that You are communicating
                              with Us through electronic records and You consent
                              to receive communications via electronic records
                              from Us periodically and as and when required. We
                              may communicate with you by email or by such other
                              mode of communication, electronic or otherwise.
                              <ol>
                                Henceforward:
                                <li>
                                  * All commercial/contractual terms are offered
                                  by and agreed to between Buyers and Sellers
                                  alone. The commercial/contractual terms
                                  include without limitation price, shipping
                                  costs, payment methods, payment terms, date,
                                  period and mode of delivery, warranties
                                  related to products and services and after
                                  sales services related to products and
                                  services.
                                </li>
                              </ol>
                            </div>

                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-color"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" d-grid text-center">
                    <button
                      type="button"
                      onClick={signupApi}
                      className="btn btn-color fs-5 fw-bold py-3  d-flex justify-content-center align-items-center rounded-pill"
                      disabled={Isloader}
                    >
                      SIGN UP
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
                  <div className="text-center">
                    <p className="mt-2">
                      Have already an account?
                      <Link
                        className="text-primary text-decoration-none Fweight-600 text-nowrap"
                        to="/login"
                      >
                        Login here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Signup;
