import React, { useContext, useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import LogOutModel from "./LogOutModel";
import "../header/header.css";
import UserDetailContext from "../../useContext/TokenContext"
const Header = () => {
  const { contextChange } = useContext(UserDetailContext);
  // let [checkLogin, setchecklogin] = useState(null);
  // let [getUserName, setUserName] = useState(null);
  // useEffect(() => {
  //   setchecklogin(JSON.parse(localStorage.getItem("token")));
  //   setUserName(JSON.parse(localStorage.getItem("userDetails")));
  // }, []);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row bg-header">
          <div className="col-11 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <strong className="e">i</strong>Phone
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto  mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active "
                        aria-current="page"
                        to="/"
                      >
                        <i className="icon-home"> </i>
                        HOME
                      </Link>
                    </li>
                   
                    
                      {contextChange.auth && contextChange.userData.role!== "ADMIN" && (
                      <>
                        <li className="nav-item">
                          <Link
                            className="nav-link active "
                            aria-current="page"
                            to="/profile/wishlist"
                          >
                            <i className="icon-heart"> </i>
                             WISHLIST
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link active "
                            aria-current="page"
                            to="/profile/order"
                          >
                            <i class="icon-shopping-cart"> </i>
                           ORDER
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link active "
                            aria-current="page"
                            to="/MainProfile/profile"
                          >
                            <i className="icon-user"> </i>
                            PROFILE
                          </Link>
                        </li>
                      </>
                    )}
                    {!contextChange?.auth && (
                      
                      <>
                        <li className="nav-item">
                          <Link
                            className="nav-link active "
                            aria-current="page"
                            to="/login"
                          >
                            <i className="icon-signin "> </i>
                            LOGIN
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link active "
                            aria-current="page"
                            to="/singup"
                          >
                            SIGNUP
                          </Link>
                        </li>
                      </>
                    )}
                    { contextChange?.userData?.role === "ADMIN" && (
                   
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/admin"
                        >
                          ADMIN
                        </Link>
                      </li>
                    )}
                    {contextChange?.auth && (
                      <>
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#/"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="icon-signout"> </i>
                            {/* LOGOUT */}
                          </a>
                          <LogOutModel
                          //  headerChange={headerChange}
                          // userDataContext ={userDataContext}
                            />
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
