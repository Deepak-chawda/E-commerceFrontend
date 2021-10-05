import React,{useState} from "react";
import { BrowserRouter } from "react-router-dom";
import PrimaryRoutes from "./primary.routes/Primary-routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetailContext from "../src/useContext/TokenContext";

const App = () => {
  const [contextChange, setcontextChange]=useState({ })
  // console.log(contextChange)
  return (
    <BrowserRouter>
      <UserDetailContext.Provider
        value={{
          token: JSON.parse(localStorage.getItem("token")),
          userData: JSON.parse(localStorage.getItem("userDetails")),
          setcontextChange
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
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </UserDetailContext.Provider>
    </BrowserRouter>
  );
};

export default App;
