import React, { Component } from 'react';
import { Row, Col, OverlayTrigger } from 'react-bootstrap';



export default function Shipping() {
    return (
        <div className="shipping">
     <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom">
            <div> Shipping </div>
          </OverlayTrigger>
        </Col>
        <Col md={6} className="txt-right">Free</Col>
      </Row>
            
        </div>
    );
}



