import React from "react";
import Container from "react-bootstrap/Container";
import './header.css'
const Header = () => {
   
  return (
    <Container fluid className="contain">
      <div className="title-header">
        <h4>THE</h4><br />
        <h1>ARTS</h1><br />
        <h4>COLLECTION</h4>
      </div>
      <div className="title-header">
        <p>Original Paintings // Photography Art // Live Paintings</p>
      <div className="btn btn-light">View The Collection</div>

      </div>
    </Container>
  );
};

export default Header;
