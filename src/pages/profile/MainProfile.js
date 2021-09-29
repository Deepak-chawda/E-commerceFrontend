import React from "react";
import { useHistory } from "react-router-dom";
import EditProfileModal from "./EditProfileModal";

const MainProfile = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log("userDtails", userDetails);
  return (
    <>
      <div className="profile-content border rounded-2">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="profile text-center">
                <div className="m-3">
                  <h2 className=" bord text-info">
                    <u>Profile Detailes</u>{" "}
                  </h2>
                </div>
                <div className="avatar">
                  <img
                    src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg"
                    alt="Circle Image"
                    className="img-raised rounded-2 img-fluid"
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
                        <th>
                          <EditProfileModal />
                          {/* <button type="button" className="btn btn-color text-dark">
                            Edit Profile
                          </button> */}
                        </th>
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
            width="100%"
            height="auto"
            style={{ verticalAlign: "middle" }}
            alt="border image"
            src=""
          />
        </div>
      </div>
    </>
  );
};

export default MainProfile;
