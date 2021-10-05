import "../Home/home.css";
import phoneImage from "../../pages/images/front_Iphone.jpg";
// import secondimg from "../images/offer.jpg";
import img2 from "../images/iphone2.jpeg";
import img3 from "../images/iphone3.jpeg";
import img4 from "../images/iphone4.jpeg";
import img5 from "../images/iphone5.jpeg";
import img7 from "../images/iphone7.jfif";
import apple_watch3 from "../images/apple_watch3.jfif";
import air_pots from "../images/air_pots.jfif";
import air_pots2 from "../images/air_pots2.jfif";
import apple_laptop from "../images/apple_laptop.jfif";
import ipad from "../images/ipad.jfif";
import CommanCard from "./comman.card";
import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import UserDetailContext from "../../useContext/TokenContext";
const Home = () => {
  const userDetails = useContext(UserDetailContext)
  // state for loader
  const [Isloader, setIsloader] = useState(false);
  // here is a get user all product api
  const [getUserData, setUserData] = useState([]);
  //  console.log("getuserdata",getUserData)
  useEffect(() => {
    userDetails.setcontextChange("this is changed")
    getUserDataApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getUserDataApi = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      setIsloader(true)
      const response = await axios.get(
        "http://localhost:4000/api/get/user/product",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("user product response=", response);
      setIsloader(false)
      setUserData(response.data.data);
      //  alert(response.data.error)
    } catch (error) {
      setIsloader(false)
      console.log("error=>", error.response);
      alert(error.response.data.error);
    }
  };
  return (
    <>
      {/* first banner */}
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center m-2">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img
                src={phoneImage}
                className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
                alt="..."
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div
              className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1 className="display-3 text-center text-md-start">
                Welcome to{" "}
                <span className="text-primary">
                  <strong>i</strong>phoneXR
                </span>
                <br />
                Model in Apple’s <br />
                2020.
              </h1>

              <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                Build a beautiful, modern <strong>i</strong>phone with from
                scratch.
              </p>

              <div className="text-center text-md-start">
                <a href="/#" className="btn btn-primary shadow lift me-1">
                  View all Phone
                  <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                </a>
                <a href="/#" className="btn btn-primary-soft lift">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second banner*/}
      <div className="container marketing">
        <div className="row text-center mt-5">
          <div className="col-lg-4 ">
            <img
              src={apple_watch3}
              alt=""
              srcSet=""
              className="img-fluid rounded-2"
            />
            <h2 className="p-2">Watchs</h2>
            <p>
              The Apple Watch is here to ensure that your important medical data
              is measured and recorded. Your blood oxygen level is measured via
              a sensor and an app. Your ECG can be taken wherever you are as
              long as the watch is on your wrist. With the Always-On Retina
              Display, the Apple Watch ensures that you get to read your fitness
              metrics with a glance. The Apple Watch is your fitness companion
              as it will motivate you to lead a healthier, fitter, and more
              active lifestyle. It also ensures that you lead a connected life.
            </p>
            <p>
              <a className="btn btn-primary" href="/#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={apple_laptop}
              alt=""
              srcSet=""
              className="img-fluid rounded-2"
            />
            <h2 className="p-2">Laptops</h2>
            <p>
              Happy with my purchase. My first macbook and now I know why it's
              such a premium device. Fantastic display, sleek looks and
              performance to match. But unhappy with flipkart's delay with my
              order. But, in the end, everything was good and I hope it stays
              that way. For anyone migrating from windows to Mac os , it is a
              steep learning curve, but it is worth the trouble.....
            </p>
            <p>
              <a className="btn btn-primary" href="/#">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src={air_pots2}
              alt=""
              srcSet=""
              className="img-fluid rounded-2"
            />
            <h2 className="p-2">Air pots</h2>
            <p>
              AirPods with Wireless Charging Case.More magical than ever.The new
              AirPods-complete with Wireless Charging Case-combine intelligent
              design with breakthrough technology and crystal clear sound.
              Powered by the new Apple H1 headphone chip, AirPods now feature
              hands-free access to Siri using just your voice. And up to 3 hours
              of talk time on asingle charge.
            </p>
            <p>
              <a className="btn btn-primary" href="/#">
                View details »
              </a>
            </p>
          </div>
        </div>

        {/* <!-- START THE FEATURETTES --> */}
        <hr className="featurette-divider" />
        <div className="row featurette flex-wrap">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Why Apple is the best place to buy iPhone.
              <span className="text-muted  d-flex flex-wrap ">
                How does it work?
              </span>
            </h2>
            <p className="lead">
              You can choose a payment option that works for you, pay less with
              a trade‑in, connect your new iPhone to your carrier and get set up
              quickly. You can also chat with a Specialist anytime.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto justify-content-center rounded-2 "
              src={img7}
              alt=""
            />
          </div>
        </div>
        <hr className="featurette-divider" />
        <h1 className="text-center grident">Here Apple Product For Order </h1>
        <div className="d-flex flex-wrap text-center justify-content-center m-2">
        
          {/*cards*/}
          {getUserData && getUserData.length !== 0 ? (
            getUserData.map((item) => {
              return (
                <>
                  <CommanCard key={item._id} Allitem={item} />
                </>
              );
            })
          ) : (
            <h5 className=" text-center text-danger m-2">No Product added by admin yet</h5>
          )}
        </div>
        {Isloader && (
            <>
            <div className="text-center mb-4">
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              </div>
            </>
          )}
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              More magical than ever.
              <span className="text-muted">With more talk time</span>
            </h2>
            <p className="lead">
              After a simple one-tap setup, AirPods are automatically on and
              always connected.1 Using them is just as easy. They can sense when
              they’re in your ears and pause when you take them out.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto justify-content-center rounded-2 "
              src={air_pots}
              alt=""
            />
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
      {/* third banner */}
      <section className=" bg-faded-info mt-4 mb-grid-gutter">
        <div className="container  rounded-3 py-4">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="px-4 pe-sm-0 ps-sm-5">
                <span className="badge bg-danger">Limited Offer</span>
                <h3 className="mt-4 mb-1 text-body fw-light">All new</h3>
                <h2 className="mb-1">Last Gen iPad Pro</h2>
                <p className="h5 text-body fw-light">
                  at discounted price. Hurry up!
                </p>
                <div
                  className="countdown py-2 h4"
                  data-countdown="07/01/2021 07:00:00 PM"
                >
                  <div className="countdown-days">
                    <span className="countdown-value"></span>
                    <span className="countdown-label text-muted">d</span>
                  </div>
                  <div className="countdown-hours">
                    <span className="countdown-value"></span>
                    <span className="countdown-label text-muted">h</span>
                  </div>
                  <div className="countdown-minutes">
                    <span className="countdown-value"></span>
                    <span className="countdown-label text-muted">m</span>
                  </div>
                  <div className="countdown-seconds">
                    <span className="countdown-value"></span>
                    <span className="countdown-label text-muted">s</span>
                  </div>
                </div>
                <a className="btn btn-accent" href="/#">
                  View offers<i className="ci-arrow-right fs-ms ms-1"></i>
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <img
                className="img-fluid mt-4 rounded-2"
                src={ipad}
                alt="iPad Pro Offer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* fourth banner*/}
      <div className="py-lg-16 py-8">
        <div className="container">
          <div className="row p-2">
            <div className="offset-xl-3 col-xl-6 col-md-12 col-12">
              <div className="mb-8 text-center">
                <h2 className="mb-3 mt-4 h1">APPLE iPhone 12</h2>
                <p className="lead">
                  128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP +
                  12MP | 12MP Front Camera A14 Bionic Chip with Next Generation
                  Neural Engine Processor Ceramic Shield Industry-leading IP68
                  Water Resistance All Screen OLED Display 12MP TrueDepth Front
                  Camera with Night Mode, 4K Dolby Vision HDR Recording
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-end">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12">
              <div className="row">
                <div className="col-md-4 mb-2 mb-lg-2">
                  <img
                    src={img4}
                    alt=""
                    className="img-fluid rounded h-100 w-100 img-hover-zoom--basic"
                  />
                </div>
                <div className="col-md-8  mb-2 mb-lg-2">
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid rounded h-100 w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-12 mt-3 mt-xl-0">
              <p className="mb-9">
                General In The Box iPhone, USB-C to Lightning Cable,
                Documentation Model Number MGJD3HN/A Model Name iPhone 12 Color
                Red Browse Type Smartphones SIM Type Dual Sim Hybrid Sim Slot No
                Touchscreen Yes OTG Compatible No Quick Charging Yes Sound
                Enhancements Built‑in Stereo Speaker
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mb-2 mb-lg-2">
                  <img
                    src={img3}
                    alt=""
                    className="img-fluid h-100 rounded w-100"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12 mb-2 mb-lg-2">
                  <img
                    src={img5}
                    alt=""
                    className="img-fluid h-100 rounded w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
