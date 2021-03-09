import React from "react";
import "./Registerpage.css";
import Loginimg from "./images/login.png";
import Countrycode from "./countrycode/countrycode";
function Registerpage() {
  return (
    <div className="Main_container">
      <div className="Register_nav">
        <h4>login</h4>
        <h4>Register</h4>
      </div>
      <div>
        <hr></hr>
      </div>
      <div className="Login_middle">
        <div className="Login_M_Left">
          <img src={Loginimg} alt="/"></img>
        </div>
        <div className="Login_M_Right">
          <div>
            <span> Mobile Number / Email ID</span>
          </div>
          <input placeholder="Mobile Number / Email ID" />
          <div>
            <span>Password</span>
          </div>
          <input placeholder="Password" />
          <div>
            <span> error message</span>
          </div>
          <div className="checkbox_remember">
            <div>
              <input type="checkbox" />
              <label>Remember me for 30 days</label>
            </div>
            <a>Forgot password ?</a>
          </div>
          <div className="checkbox_loginotp">
            <input type="checkbox" />
            <label>Login with otp </label>
          </div>
          <div className="Login_button_jwt">
            <button>Login</button>
          </div>
          <div>
            <hr></hr>
          </div>
          <div className="Login_button_fb">
            <button>Login with FB</button>
          </div>
        </div>
      </div>
      <div className="Register_container">
        <div className="Register_header">
          <div>
            {" "}
            <p>Join Practo</p>
          </div>
          <div className="Register_as_Doctor">
            <p>Are you a doctor?</p>
            <span>Register here</span>
          </div>
        </div>
        <div className="Register_body">
          <div>
            <p>Full Name</p>
            <input placeholder="Full Name" />
          </div>
          <div>
            <p>Email Address</p>
            <input placeholder="Enter Email" />
          </div>
          <div>
            <p>Mobile Number</p>
          </div>
          <div className="Register_Mobilenumber">
            <Countrycode />
            <input placeholder="Mobile Number" />
          </div>
          <div>
            <p>Create Password</p>
          </div>
          <div>
            <input placeholder="Create Password" />
          </div>
          <div>
            <input type="checkbox" />
            <label>
              {" "}
              Receive relevant offers and promotional communication from Practo
            </label>
            <p>By signing up, I agree to terms </p>
          </div>
          <div>
            <button>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;
