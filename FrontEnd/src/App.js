import React from "react";
import "./App.css";

import Doctorlist from "./components/Doctorlist/Doctorlist";
import Navbar from "./components/Navbar/Navbar";
import Registerpage from "./components/Registerpage/Registerpage";
function App() {
  return (
    <div className="App_container">
      {/* <Navbar />
      <Doctorlist /> */}
      <Registerpage />
    </div>
  );
}

export default App;
