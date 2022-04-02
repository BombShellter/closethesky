import React from "react";
import logo from "../../assets/logo.png";


const Homepage = () => {
  return (
    <div className="homepage">
      <div className="title">Homepage</div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Homepage;
