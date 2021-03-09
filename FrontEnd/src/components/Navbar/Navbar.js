import React, { Component } from "react";
import "./Navbar.css";
import { GoVerified } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      displaylist: "none",
      listdisply: "none",
    };
  }
  displayhandler = () => {
    const ans = this.state.displaylist === "none" ? "block" : "none";
    this.setState({ displaylist: ans });
  };
  clickhandler = () => {
    console.log("clicked");
  };
  listhandler = () => {
    this.setState({
      listdisply: this.state.listdisply === "none" ? "block" : "none",
    });
  };
  render() {
    return (
      <div className="Main_container">
        <div className="Nav_cntainer">
          <div>
            <img
              src="https://i2.wp.com/www.cosmoderma.healios.co.in/wp-content/uploads/2019/04/practo.png?fit=1586%2C1057"
              alt="/"
            />
          </div>
          <div className="Nav_middle">
            <div className="names">
              <p>Doctors</p>
              <small>Book an appoinment</small>
            </div>
            <div className="names">
              <p>consult</p>
              <small>Consult with top doctors</small>
            </div>
            <div className="names">
              <p>Pharmacy</p>
              <small>Medicines & health products</small>
            </div>
            <div className="names">
              <p>Diagonstics</p>
              <small>Book tests & checkups</small>
            </div>
          </div>
          <div className="Menudrop">
            <AiOutlineMenu
              className="Menudrop_icon"
              onClick={this.listhandler}
            />
            <div
              className="Menudrop_li"
              style={{ display: this.state.listdisply }}
            >
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </div>
          </div>
          <div className="names">
            <span>For providers</span>
            <BiChevronDown />
          </div>
          <div className="names">
            <span>Security & help</span>
            <BiChevronDown />
          </div>
          <button>Login / Signup</button>
        </div>
        <hr style={{ color: "grey" }} />
        <div className="Nav2">
          <div className="Nav_inputs">
            <IoLocationOutline className="icon_city" />
            <input id="input_1" placeholder="Cityname" />
            <IoIosSearch className="icon_spec" />
            <input placeholder="Specisation" />
          </div>
          <div className="Nav2_text">
            <span>Fed up of endless wait?</span>
            <p>
              Look for clinic with Prime
              <GoVerified className="icons" />{" "}
            </p>
          </div>
        </div>
        <div className="Nav3">
          <div className="main_Nav3">
            <div className="dropdowns">
              <div className="checkbox">
                <input type="radio" />
                <label>Video consult</label>
              </div>
            </div>
            <div className="dropdowns">
              <div className="checkbox">
                <label>Avaliablity</label>
              </div>
            </div>
            <div className="dropdowns">
              <div className="checkbox">
                <label>All filter</label>
              </div>
            </div>
            <div className="dropdowns">
              <label>Sort by </label>
              <div className="checkbox" onClick={this.displayhandler}>
                <label>Relevance</label>
              </div>
            </div>
          </div>
          <div className="listdrop">
            <div
              className="first_drop"
              style={{ display: this.state.displaylist }}
            >
              <li onClick={this.clickhandler}>Earliest</li>
              <li onClick={this.clickhandler}>price high to low</li>
              <li onClick={this.clickhandler}>price low to high</li>
              <li onClick={this.clickhandler}>Year of experience</li>
              <li onClick={this.clickhandler}>Recommended</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
