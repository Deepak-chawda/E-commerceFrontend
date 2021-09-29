import React, { useState } from "react";
// install axios and require here
import axios from 'axios';
// here use hook for routing page
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../signup/signup.css";
import loginImg from "../images/loginImg.svg";
const Login = () => {
  // here call useHistory function for using..use to routing for btw diff componets
  const history = useHistory()
  // user inicial state
  const [userDetails, setDetails] = useState({
    email : "",
    password : "",
  });
  // handle Change
  const handleloginChange = (e) => {
    const { name, value } = e.target; // object destructuring
    setDetails({ ...userDetails, [name]: value});
  };
  const loginApi = async ()=>{
    // console.log("userDetails=", userDetails)
    try {
      // alert massage for fill all field
      if(userDetails.email==="" || userDetails.password==="")
      {
        return alert("plz fill all required field")
      }
      const response = await axios.post("http://localhost:4000/api/sigin",userDetails)

    // console.log("response =",response)
    localStorage.setItem("userDetails" , JSON.stringify(response.data.data.user))
    localStorage.setItem("token" , JSON.stringify(response.data.data.token))
    if(response.data.data.user.role==="ADMIN"){
      history.push("/admin")
    }else{
      history.push("/")
    }
  alert(response.data.msg)
    } catch (error) {
      console.log("error response=>", error.response)
      // error showing in front end
      alert(error.response.data.error)
    }
  }
  return (
    <>
      <section className="py-5 ">
        <div className="container ">
          <h2 className="text-center pb-2">Log in </h2>
          <div className="borderbox border border-green rounded-lg p-sm-5 p-3 mt-3 waveIamage">
            <div className="row align-items-center mx-auto m-4">
              <div className=" col-12 col-md-5 col-lg-6 order-md-2">
                <img
                  src={loginImg}
                  alt=""
                  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 mb-2 animat"
                />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1">
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fa-1x fw-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleloginChange}
                      className="form-control py-3 px-1"
                      id="inputEmail4"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fa-1x fw-bold">
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={handleloginChange}
                      name="password"
                      className="form-control py-3 px-1"
                      autoComplete="off"
                      // id="inputPassword4"
                      required
                    />
                  </div>
                  <div className=" d-grid text-center">
                    <button type="button" onClick={loginApi} className="btn btn-color py-3">
                      LOG IN
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="mt-2">
                      Don't have an account?
                      <Link
                        className="text-primary text-decoration-none Fweight-600 text-nowrap"
                        to="/singup"
                      > Sign up here
                      </Link>
                    </p>
                    <p className="mt-2">
                      <Link
                        className="text-danger text-decoration-none text-nowrap"
                        to="/#"
                      >
                        Forget password ?
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
