import React from "react";
import "../footer/footer.css";
// import visa from "../../pages/images/visa.svg"

const footer = () => {
  return (
    <>
      <footer className="bg-dark  text-white ">
        <div className="container" data-select2-id="10">
          <div
            className="row justify-content-md-between gutter-2"
            data-select2-id="17"
          >
            {/* <!-- menu --> */}
            <div className="order-1 col-md-8 col-lg-4 ">
              <div className="row ">
                <div className="col">
                  <h4 className="eyebrow mb-1">Company</h4>
                  <ul className="menu-list">
                    <li className="menu-list-item">
                      <a href="/#" className="menu-list-link">
                        Our story
                      </a>
                    </li>
                    <li className="menu-list-item">
                      <a href="/#" className="menu-list-link">
                        Careers
                      </a>
                    </li>
                    <li className="menu-list-item">
                      <a href="/#" className="menu-list-link">
                        Press
                      </a>
                    </li>
                    <li className="menu-list-item">
                      <a href="/#" className="menu-list-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h4 className="eyebrow mb-1">Help Center</h4>
                  <ul className="menu-list">
                    <li className="menu-list-item">
                      <a href="/#" className="menu-list-link">
                        Shipping
                      </a>
                    </li>
                    <li className="menu-list-item">
                      <a href="/#" className="menu-list-link">
                        Returns
                      </a>
                    </li>
                    <li className="menu-list-item">
                      <a href="/#" className="menu-list-link">
                        Payment
                      </a>
                    </li>
                    <li className="menu-list-item">
                      <a href="/#" className="menu-list-link">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <!-- subscribe --> */}
            <div className="order-2 order-md-3 order-lg-2 col-md-8 col-lg-4">
              <h4 className="eyebrow mb-1">Subscribe to Newsletter</h4>
              <div className="input-combined mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your email"
                  aria-label="Your Email"
                  aria-describedby="button-addon2"
                />
                <button className="btn btn-primary m-2 " type="button" id="button-addon2">
                  Subscribe
                </button>
                <span className="input-combined_indicator"></span>
              </div>
              
            </div>

            {/* <!-- settings --> */}
            <div
              className="order-3 order-md-2 order-lg-3 col-md-4 col-lg-3"
              data-select2-id="16"
            >
              <h4 className="eyebrow mb-1">Social connection</h4>
              <ul className="list d-flex">
                <li className="m-3">
                  <a href="#!" className="text-hover-facebook" id="GFG">
                  <i className="bi bi-facebook"></i>
                
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-hover-instagram" id="GFG">
                 
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-hover-twitter" id="GFG">
                    {/* <i className="fs-28 icon-twitter-square-brands">bbb</i> */}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-hover-pinterest" id="GFG">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </footer>
     
    </>
  );
};

export default footer;
