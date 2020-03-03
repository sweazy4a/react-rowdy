import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class TaxesFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}> Taxes & fees </Col>
        <Col md={6} className="txt-right">
          <strong>{`$${this.props.taxes}`}</strong>
        </Col>
      </Row>
    );
  }
}
