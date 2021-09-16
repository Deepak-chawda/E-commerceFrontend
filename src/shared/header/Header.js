import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row bg-header">
          <div className="col-11 mx-auto">
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
                    <li className="nav-item">
                      <Link
                        className="nav-link active "
                        aria-current="page"
                        to="/"
                      >
                        <i className="icon-heart"> </i>
                        WISHLIST
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active "
                        aria-current="page"
                        to="/"
                      >
                        <i className="icon-user"> </i>
                        PROFILE
                      </Link>
                    </li>
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
                        <i className="icon-signout"> </i>
                        SIGNUP
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active "
                        aria-current="page"
                        to="/admin"
                      >
                        <i className="icon-signout"> </i>
                        ADMIN
                      </Link>
                    </li>
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