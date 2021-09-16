import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimaryRoutes from "./primary.routes/Primary-routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <BrowserRouter>
      <PrimaryRoutes />
    </BrowserRouter>
  );
};

export default App;
