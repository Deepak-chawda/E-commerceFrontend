import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import Admin from "../pages/admin/Admin-home";
import Category from "../pages/Category/Category";
// import Order from "../pages/order/Order";
// import Wishlist from "../pages/wishlist/Wishlist";
import ForgetPass from "../pages/forgetpass/ForgetPass";
import Profile from "../pages/profile/Profile"
import ErrorPage from "../pages/Error page 404/ErrorPage";
const PrimaryRoutes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact  path="/login" component={Login} />
        <Route exact  path="/singup" component={Signup} />
        <Route exact  path="/admin" component={Admin} />
        <Route exact  path="/profile/wishlist" component={Profile} />
        <Route exact  path="/profile/order" component={Profile} />
        <Route exact  path="/MainProfile/profile" component={Profile} />
        <Route exact  path="/MainProfile/profile" component={Profile} />
        <Route exact  path="/api/forgetpass" component={ForgetPass} />
        <Route exact  path="/categoryProduct/:category" component={Category} />
        <Route path="*" component={ErrorPage}/>
      </Switch>
      <Footer />
    </>
  );
};

export default PrimaryRoutes;
