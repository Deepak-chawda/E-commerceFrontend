import React from "react";
import { Route, Switch } from "react-router-dom";
import Order from "../order/Order";
import Wishlist from "../wishlist/Wishlist";
import MainProfile from "../profile/MainProfile";
import "./profile.css";
import { Link,useHistory  } from "react-router-dom";
import dc from "../images/dc.jpg";

const Profile = () => {
  const history =useHistory();
  return (
    <>
      {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> */}
      <div class="container padding-bottom-3x mb-2 my-4">
        <div class="row">
          <div class="col-lg-4">
            <aside class="user-info-wrapper">
              <div class="user-cover backImage">
                <div
                  class="info-label"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="You currently have 290 Reward Points to spend"
                >
                  <i class="icon-medal"></i>+
                </div>
              </div>
              <div class="user-info">
                <div class="user-avatar">
                  <a class="edit-avatar" href="#"></a>
                  <img src={dc} alt="User" />
                </div>
                <div class="user-data">
                  <h4>Daniel Adams</h4>
                  <span>Joined February 06, 2017</span>
                </div>
              </div>
            </aside>
            <nav class="list-group">
              <Link class="list-group-item with-badge" to="/profile/order">
                <i class=" fa fa-th"></i>Orders
              </Link>
              <a class="list-group-item" to="/MainProfile/profile">
                <i class="fa fa-user"></i>Profile
              </a>

              {/* active */}
              <Link class="list-group-item with-badge" to="/profile/wishlist">
                <i class="fa fa-heart"></i>Wishlist
              </Link>
              <Link class="list-group-item with-badge" to="/profile/mytickets">
                <i class="fa fa-tag"></i>My Tickets
              </Link>
              <Link class="list-group-item" to="/" onClick={()=>{ localStorage.clear()
                   history.push("/")} }><i class="fa fa-map"></i>Log out
              </ Link>
            </nav>
          </div>
          <div class="col-lg-8  rounded-2">
            <div class="padding-top-2x mt-2 hidden-lg-up"></div>
            {/* <!-- Wishlist Table--> */}
            <div class="table-responsive wishlist-table margin-bottom-none">
              <table class="table">
                  <Switch>
                    <Route exact path="/profile/wishlist" component={Wishlist} />
                    <Route exact path="/profile/order" component={Order} />
                    <Route exact path="/MainProfile/profile" component={MainProfile} />
                  </Switch>
              </table>
            </div>
            <hr class="mb-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
