import React, { Component } from "react";
import "./profile.css";

export class profile extends Component {
  render() {
    return (
      <div className="Main_Profile_container">
        <div className="Profile_container">
          <div className="Profile_header">
            <h4>Accounts</h4>
            <button> Save changes</button>
          </div>
          <hr />
          <div className="Profile_body">
            <div className="profile_1">
              <div className="profile_1_left">
                <span>Profile photo</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorDmnCsd0Iqim0FeInyBjyLPcwJWnTgRkzg&usqp=CAU"
                  alt="/"
                />
                <span>Pick a photo from your computer</span>
              </div>

              <div className="profile_1_right">
                <span>Name*</span>
                <input placeholder="Enter name" />
              </div>
            </div>
            <hr />
            <div className="profile_2">
              <div className="profile_2_1">
                <div className="profile_2_1_1">
                  <span>Phone Number</span>
                  <input placeholder="Enter phone number" />
                </div>
                <div className="profile_2_1_2">
                  <span>Email Address</span>
                  <input placeholder="Email Address" />
                </div>
                <div className="profile_2_1_3">
                  <span>Gender</span>
                  <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
              <div className="profile_2_2">
                <div className="profile_2_2_1">
                  <span>Date of birth</span>
                  <input placeholder="Enter phone number" />
                </div>
                <div className="profile_2_2_2">
                  <span>Blood group</span>
                  <input placeholder=" Enter Blood group" />
                </div>
                <div className="profile_2_2_3">
                  <span>TimeZone</span>
                  <select id="timezone" name="timezone">
                    <option value="india">India(+5:30)</option>
                  </select>
                </div>
              </div>
            </div>{" "}
            <hr />
            <div className="profile_3">
              <div className="profile_3_1">
                <div className="profile_3_1_1">
                  <span>House No:</span>
                  <input placeholder="Enter House No" />
                </div>
                <div className="profile_3_1_2">
                  <span>Colony / Street</span>
                  <input placeholder="Colony / Street" />
                </div>
                <div className="profile_3_1_3">
                  <span>City</span>
                  <input placeholder="City" />
                </div>
              </div>
              <div className="profile_3_2">
                <div className="profile_3_2_1">
                  <span>State</span>
                  <input placeholder="Enter State" />
                </div>
                <div className="profile_3_2_2">
                  <span>Country*</span>
                  <select id="country" name="language">
                    <option value="India">India</option>
                  </select>
                </div>
                <div className="profile_3_2_3">
                  <span>Pincode</span>
                  <input placeholder="Pincode" />
                </div>
              </div>
            </div>
            <hr />
            <div className="profile_4">
              <div className="profile_4_1">
                <span>Extra phone numbers</span>
                <input placeholder="Phone Number" />
              </div>
              <div className="profile_4_2">
                <span>Language</span>
                <select id="language" name="language">
                  <option value="English">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profile;
