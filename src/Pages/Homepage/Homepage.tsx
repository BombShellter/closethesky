import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import ShelterList from "../../Components/ShelterList/ShelterList";



const Homepage = () => {
  return (
   <Container>
  <div className="homepage">
      <div className="title">Homepage</div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
    <ShelterList />
   </Container>
  

  );
};

export default Homepage;
