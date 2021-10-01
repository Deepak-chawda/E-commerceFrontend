import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimaryRoutes from "./primary.routes/Primary-routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
