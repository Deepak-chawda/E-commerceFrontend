import React from "react";
import "../Home/home.css";

const CommanCard = () => {
  return (
    <>
      <div className="card mb-3 m-3 " style={{ maxWidth: " 400px" }}>
        <div className="row g-0">
          <div className="col-md-6 col-sm-5">
            <img
              src="https://cdn.pixabay.com/photo/2016/12/28/19/12/iphone-1936818_960_720.png"
              className="img-fluid rounded-start p-2 "
              alt="img"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title" >Price</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
              </p>
              <a href="/#" className="btn btn-primary m-2 d-grid">
                Place Order
              </a>
              <a href="/#" className="btn btn-danger m-2 d-grid">
                Add to wishlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommanCard;
