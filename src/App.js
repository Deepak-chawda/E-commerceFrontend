import React, { useState,useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import PrimaryRoutes from "./primary.routes/Primary-routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetailContext from "../src/useContext/TokenContext";
const App = () => {
  const [contextChange, setcontextChange] = useState({
    userData: "",
    auth: false,
    token : ''
  });
  useEffect(() => {
    if (contextChange?.auth) {
      setcontextChange({
        ...contextChange,
        ["auth"]: true,
        ["userData"]: JSON.parse(localStorage.getItem("userDetails")),
        ["token"]: JSON.parse(localStorage.getItem("token")),
      });
    } else if (localStorage.getItem("userDetails")) {

      setcontextChange({
        ...contextChange,
        ["auth"]: true,
        ["userData"]: JSON.parse(localStorage.getItem("userDetails")),
        ["token"]: JSON.parse(localStorage.getItem("token")),
      });
    }
  }, []);
  // console.log(contextChange);
  return (
    <BrowserRouter>
      <UserDetailContext.Provider
        value={{
          contextChange,
          setcontextChange,
        }}
      >
        <PrimaryRoutes />
        {/* this is for toaster componets */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={3}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </UserDetailContext.Provider>
    </BrowserRouter>
  );
};

export default App;
