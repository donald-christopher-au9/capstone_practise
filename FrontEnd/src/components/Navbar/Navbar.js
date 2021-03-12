import React, { Component } from "react";
import "./Navbar.css";
import { GoVerified } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
const cityurl = "http://localhost:1111/city/all";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      City_searchlist: "none",
      cancelsearch_city: "none",
      hospital_searchlist: "none",
      cancelsearch_hospital: "none",
      profiledisplay: "none",
      Cityname: "",
      specilization: "",
    };
  }

  Citysearchhandler = () => {
    const ans = this.state.City_searchlist === "none" ? "block" : "none";
    const cancelsearch_city =
      this.state.City_searchlist === "none" ? "block" : "none";
    this.setState({
      City_searchlist: ans,
      cancelsearch_city: cancelsearch_city,
    });
  };
  hospitalhandler = () => {
    const hospital_searchlist =
      this.state.hospital_searchlist === "none" ? "block" : "none";
    const cancelsearch_hospital =
      this.state.hospital_searchlist === "none" ? "block" : "none";
    this.setState({ hospital_searchlist, cancelsearch_hospital });
  };
  profilehandler = () => {
    const ans = this.state.profiledisplay === "none" ? "block" : "none";
    this.setState({ profiledisplay: ans });
  };
  Citynamehandler = (data) => {
    this.setState({ specilization: data });
  };

  cityhandler = (data) => {
    if (data) {
      return data.map((city) => (
        <>
          <li onClick={() => this.Citynamehandler(city.cityname)}>
            {city.cityname}
          </li>
        </>
      ));
    }
  };

  render() {
    console.log(this.state.specilization);
    return (
      <div className="Main_container">
        <div className="Nav_cntainer">
          <div>
            <Link to="/">
              <img
                src="https://i2.wp.com/www.cosmoderma.healios.co.in/wp-content/uploads/2019/04/practo.png?fit=1586%2C1057"
                alt="/"
              />
            </Link>
          </div>
          <div className="Nav_middle">
            <Link
              to="/doctorlist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="names">
                <p>Doctors</p>
                <small>Book an appoinment</small>
              </div>
            </Link>
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
          <div className="Nav_right">
            <div className="names">
              <span>For providers</span>
              <BiChevronDown />
            </div>
            <div className="names">
              <span>Security & help</span>
              <BiChevronDown />
            </div>
            <Link to="/authpage/login">
              <button>Login / Signup</button>
            </Link>
            {/* <span onClick={this.profilehandler} className='Profile_dropdown'>Alfred Richards <BiChevronDown /></span> */}
            <div
              className="profile_list"
              style={{ display: this.state.profiledisplay }}
            >
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </div>
          </div>
        </div>
        <hr style={{ color: "grey" }} />
        <div className="Nav2">
          <div className="Nav_inputs">
            <div className="Nav_input_search" id="city_input">
              <input placeholder="Cityname" onClick={this.Citysearchhandler} />
              <IoLocationOutline className="icon_city" />
              <MdCancel
                className="City_Inputcancel"
                style={{ display: this.state.cancelsearch_city }}
                onClick={this.Citysearchhandler}
              />
              <div
                className="Nav_input_search_list"
                style={{ display: this.state.City_searchlist }}
              >
                {this.cityhandler(this.state.Cityname)}
                {/* {this.cityhandler(this.state.statename)} */}
              </div>
            </div>
            <div className="Nav_input_search" id="hospital_input">
              <input placeholder="Specisation" onClick={this.hospitalhandler} />
              <IoIosSearch className="icon_spec" />
              <MdCancel
                className="Hospital_Inputcancel"
                style={{ display: this.state.cancelsearch_hospital }}
                onClick={this.hospitalhandler}
              />
              <div
                className="Nav_input_search_list"
                style={{ display: this.state.hospital_searchlist }}
              >
                <li>lkafhasdf</li>
                <li>lkafhasdf</li>
                <li>lkafhasdf</li>
                <li>lkafhasdf</li>
              </div>
            </div>
          </div>
          <div className="Nav2_text">
            <span>Fed up of endless wait?</span>
            <p>
              Look for clinic with <strong className="prime">Prime</strong>
              <GoVerified className="icons" style={{ margin: "5px" }} />{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch(cityurl)
      .then((response) => response.json())
      .then((res) => this.setState({ Cityname: res }));
  }
}

export default Navbar;
