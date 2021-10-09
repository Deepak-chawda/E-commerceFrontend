import React from "react";
import { Route, Switch } from "react-router-dom";
import Order from "../order/Order";
import Wishlist from "../wishlist/Wishlist";
import MainProfile from "../profile/MainProfile";
import LogOutModel from "../../shared/header/LogOutModel";
import "./profile.css";
import { Link } from "react-router-dom";
// import dc from "../images/dc.jpg";
import avatarImage from "../images/avatar1.svg"

const Profile = () => {
  // const history = useHistory();
  const proName = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <>
      <div className="container padding-bottom-3x mb-2 my-4">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <aside className="user-info-wrapper ">
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
              <div className="user-info zIndex">
                <div className="user-avatar playWH">
                  <img src={proName?.profilePic ?proName.profilePic : avatarImage} alt="User"  />
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
                <i className="icon-shopping-cart icon-2x text-success"></i>
                <span className="">Orders</span>
              </Link>
              <Link
                className="list-group-item with-badge"
                to="/MainProfile/profile"
              >
                <i className="icon-user icon-2x text-primary"></i>Profile
              </Link>

              {/* active */}
              <Link
                className="list-group-item with-badge"
                to="/profile/wishlist"
              >
                <i className="icon-heart icon-2x text-danger" ></i>Wishlist
              </Link>
              <a
                className="list-group-item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                href="#/"
              >
                <i className="icon-signout icon-2x text-dark"></i>Log out
                <LogOutModel />
              </a>
            </nav>
          </div>
          <div className="col-lg-8  rounded-2 ">
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
