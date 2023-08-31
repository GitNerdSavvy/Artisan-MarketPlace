import React from 'react'
import{ Container, Row, Col }from "react-bootstrap";
import Imgg from '../../assets/header.jpg'
import './demo.css'
const Demo = () => {
  const imgStyle = {
    height: '400px',
    width: '400px',
    margin:'20px',
    
  };
  return (
    <Container className='contain1'>
        <Row className='ro'>
            <Col className='co col-md-4'>
            <img src={Imgg} alt="AltImage"style={imgStyle} />
            <div className="btn btn-light">BUY</div>
            </Col>
            <Col className='co col-md-4'>
            <img src={Imgg} alt="AltImage" style={imgStyle} />
            <div className="btn btn-light">BUY</div>
            </Col>
            <Col className='co col-md-4'>
            <img src={Imgg} alt="AltImage" style={imgStyle} />
            <div className="btn btn-light">BUY</div>
            </Col>
        </Row>
    </Container>
  )
}

export default Demo