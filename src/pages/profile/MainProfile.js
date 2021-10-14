import React, { useState,useEffect } from "react";
import EditProfileModal from "./EditProfileModal";
import "./mainProfile.css"
import avatarImage from "../images/avatar1.svg";
import dgk from "../images/bgProImg.png";
import axios from "axios";

const MainProfile = () => {
  const [userDetails,setuserDetails]=useState()
  useEffect(()=>{
    getUserDetails()
  },[ ])
  const getUserDetails= async()=>{
    const localUser= JSON.parse(localStorage.getItem("userDetails"))._id ;
    try {
      const response =await axios.get(`http://localhost:4000/api/userPofile/details?_id=${localUser}`)
      console.log("response=>",response)
      setuserDetails(response.data.data)
    } catch (error) {
    console.log("error",error.response)
    }
  }
  return (
    <>
      <div className="profile-content border rounded-2 overflow-hidden">
        <div className="container px-2">
          <div className="row p-0">
            <div className="col-md-12 p-0">
              <div className="profile text-center">
                <div className="m-3">
                  <h2 className=" bord text-info">
                    <u>Profile Detailes</u>
                  </h2>
                </div>
                <div className="avatar playMWH">
                  <img
                    src={userDetails?.profilePic ? userDetails.profilePic :avatarImage }
                    alt="UserImage"
                    className="img-thumbnail rounded-2 img-fluid"
                   
                  />
                </div>
                <div className="name">
                  <h3 className="title mt-3">{userDetails?.userName}</h3>
                  <h6>User</h6>
                </div>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody className="">
                      <tr>
                        <th>User Id :</th>
                        <td>{userDetails?._id}</td>
                      </tr>
                      <tr>
                        <th>Email Id :</th>
                        <td>{userDetails?.email}</td>
                      </tr>
                      <tr>
                        <th>Address :</th>
                        {userDetails?.address === " " ? (
                          "?"
                        ) : (
                          <td>{userDetails?.address}</td>
                        )}
                      </tr>
                      <tr>
                        <th>Phone no. :</th>
                        {userDetails?.contact === " " ? (
                          "?"
                        ) : (
                          <td>{userDetails?.contact}</td>
                        )}
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <EditProfileModal getUserDetails={getUserDetails}/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="p-0"
            width="100%"
            height="auto"
            style={{ verticalAlign: "middle" }}
            alt="borderImage"
            src={dgk}
          />
        </div>
      </div>
    </>
  );
};

export default MainProfile;
