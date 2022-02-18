import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "../css/main.css";
class home extends Component {
  render() {
    return (
      <div className="dashboard">
        <h4>My Dashbard</h4>
        <Row>
          <Col className="flexContainer">
            <Link className="boxText" to="/user/mysponsors">
              <h3>My Sponsors </h3>
            </Link>
          </Col>
          <Col className="flexContainer">
            <Link className="boxText" to="/user/current">
              <h3>Current Month Sponsors </h3>
            </Link>
          </Col>
          <Col className="flexContainer">
            <h3 className="boxText">My Payout</h3>
          </Col>
          <Col className="flexContainer">
            <h3 className="boxText">My Details</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default home;
