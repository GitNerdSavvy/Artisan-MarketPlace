import React from 'react'
import{ Container, Row, Col, TabContainer }from "react-bootstrap";
import './intro.css'
const Intro = () => {
  return (
    <Container fluid className='contain-intro'>
      <div className="heading-intro">
      <div className="title-intro">
        <h3>Welcome To Artisan Marketplace</h3>
      </div>
      <div className="intro">
      An artisan marketplace is a digital platform that connects skilled artisans and craftsmen with potential buyers and customers.
       This marketplace provides a virtual space for artisans to showcase and sell their handmade, unique, and often culturally significant products. 
      </div>
      <div className="intro">Artisan marketplaces play a crucial role in supporting local artisans and preserving traditional craftsmanship. 
      They enable artisans to reach a global audience that they might not have access to otherwise. 
      </div>
      </div>
      <div className="btn btn-light ">
        <a href='/'>Learn More About Artists</a>
      </div>
    </Container>
  )
}

export default Intro