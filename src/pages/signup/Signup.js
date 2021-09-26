import React,{ useState } from "react";
// install axios and require here
import axios from 'axios';
// here use hook for routing page
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../signup/signup.css";
import signup1 from "../images/signup1.svg";
const Signup = () => {
  // here call useHistory function for using..use to routing for btw diff componets
  const history = useHistory()
  // user inicial state
  const [userDetails, setDetails] = useState({
    email : "",
    password : "",
  });
  // handle Change
  const handlesignupChange = (e) => {
    const { name, value } = e.target; // object destructuring
    setDetails({ ...userDetails, [name]: value});
  };
  const signupApi = async ()=>{
    console.log("userDetails=", userDetails)
    try {
      const response = await axios.post("http://localhost:4000/api/signup?isAdmin=false",userDetails)
      localStorage.setItem("userDetails" , JSON.stringify(response.data.data.user))
      localStorage.setItem("token" , JSON.stringify(response.data.data.token))

      // console.log("response =",response)
      history.push("/login")
 
    } catch (error) {
      console.log("error", error)
      // error showing in front end
      alert(error.response.data.error)
    }
  }
  return (
    <>
      <section className="py-5 ">
        <div className="container ">
          <h2 className="text-center pb-2">Sign up Form</h2>
          <div className="borderbox border border-green rounded-lg p-sm-5 p-3 mt-3 waveIamage">
            <div className="row align-items-center mx-auto m-4">
              <div className=" col-12 col-md-5 col-lg-6 order-md-2">
                <img
                  src={signup1}
                  alt=""
                  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 mb-2 animat"
                />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1">
                <form className="row g-3">
                  <div className="col-md-12">
                    <label for="inputEmail4" className="form-label fa-2x">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handlesignupChange}
                      className="form-control py-3 px-1"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fa-2x">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={handlesignupChange}
                      className="form-control py-3 px-1"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="inputPassword4" className="form-label fa-2x">
                      Conform password
                    </label>
                    <input
                      type="password"
                      className="form-control py-3 px-1"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" for="gridCheck">
                        &nbsp; I agree to all &nbsp;
                        <a
                          // data-target="#terms"
                          // data-toggle="modal"
                          // data-backdrop="static"
                          // data-keyboard="false"
                          href="/#"
                          className="norm"
                        >
                          Terms and Conditions .
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className=" d-grid text-center">
                    <button type="button" onClick={signupApi} className="btn btn-color py-3">
                      SIGN UP <span className="spinner-border " style={{ width:"3rem;", height :"3rem;"}} role="status" aria-hidden="true"></span>
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
      </section>
    </>
  );
};

export default Signup;
