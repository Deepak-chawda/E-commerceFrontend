import React from "react";
import { Route, Switch } from "react-router-dom";
import Order from "../order/Order";
import Wishlist from "../wishlist/Wishlist";
import MainProfile from "../profile/MainProfile";
import LogOutModel from "../../shared/header/LogOutModel";
import "./profile.css";
import { Link, useHistory } from "react-router-dom";
import dc from "../images/dc.jpg";

const Profile = () => {
  const history = useHistory();
  const proName = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <>
      <div className="container padding-bottom-3x mb-2 my-4">
        <div className="row">
          <div className="col-lg-4">
            <aside className="user-info-wrapper">
              <div className="user-cover backImage">
                <div
                  className="info-label"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="You currently have 290 Reward Points to spend"
                >
                  <i className="icon-medal"></i>+
                </div>
              </div>
              <div className="user-info">
                <div className="user-avatar">
                  {/* <a className="edit-avatar" href="#/"></a> */}
                  <img src={dc} alt="User" />
                </div>
                <div className="user-data">
                  <h6>Hii.....</h6>
                  <h4>{proName?.userName}</h4>
                  <span>Joined February 06, 2021</span>
                </div>
              </div>
            </aside>
            <nav className="list-group">
              <Link className="list-group-item with-badge" to="/profile/order">
                <i className="icon-shopping-cart icon-2x"></i>
                <span className="">Orders</span>
              </Link>
              <Link
                className="list-group-item with-badge"
                to="/MainProfile/profile"
              >
                <i className="icon-user icon-2x"></i>Profile
              </Link>

              {/* active */}
              <Link
                className="list-group-item with-badge"
                to="/profile/wishlist"
              >
                <i className="icon-heart icon-2x"></i>Wishlist
              </Link>
              <Link
                className="list-group-item with-badge"
                to="/profile/mytickets"
              >
                <i className="fa fa-tag icon-2x"></i>My Tickets
              </Link>
              <a
                className="list-group-item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="icon-signout icon-2x"></i>Log out
                <LogOutModel />
              </a>
            </nav>
          </div>
          <div className="col-lg-8  rounded-2">
            {/* <div className="padding-top-2x mt-2 hidden-lg-up"></div> */}
            {/* <!-- Wishlist Table--> */}
            <div className="table-responsive wishlist-table margin-bottom-none">
              <table className="table">
                <Switch>
                  <Route exact path="/profile/wishlist" component={Wishlist} />
                  <Route exact path="/profile/order" component={Order} />
                  <Route
                    exact
                    path="/MainProfile/profile"
                    component={MainProfile}
                  />
                </Switch>
              </table>
            </div>
            <hr className="mb-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
