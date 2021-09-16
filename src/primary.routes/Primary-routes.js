import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import Admin from "../pages/admin/Admin-home";

const PrimaryRoutes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/singup" component={Signup} />
        <Route path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </>
  );
};

export default PrimaryRoutes;
