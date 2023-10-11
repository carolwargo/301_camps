import React from "react";

import Container from "react-bootstrap/Container";
import { Row, Col, NavLink } from "react-bootstrap";

export default function FormFileExample() {
  return (
    <>
      <div
        className="train-container"
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          paddingRight: "2rem",
          paddingLeft: "2rem",
          backgroundColor: "lightgrey",
        }}
      >
        <h1
          style={{
            fontFamily: "bellota text",

            color: "black",
            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          TRAIN{" "}
          <span style={{ fontSize: "2rem", color: "red" }}>like a Caveman</span>
        </h1>

        <br></br>
        <h2
          style={{
            fontFamily: "bellota text",

            color: "black",
            paddingTop: "2rem",
            paddingBottom: "2rem",

            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          SESSIONS
        </h2>
        {/* start all sessions container*/}
        <Container>
          {/*start individual session container*/}
          <Container>
            {/*start individual single session*/}
            <Container
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <Row>
                <Col md={5}>
                  <h4>Individual Catching Single Session</h4>
                  <h4>DESCRIPTION:</h4>
                </Col>
                <Col>
                  <h6>
                    Date: 2023 <br></br>
                    Location: 301_CATCHING HQ <br></br>
                    Time: 9am-12pm <br></br>
                    Cost: $75 <br></br>
                  </h6>
                </Col>
                <Col className="mt-5">
                <NavLink to="/register-form">
    <button className="btn btn-primary">Register & Pay</button>
  </NavLink>
                </Col>
              </Row>
            </Container>
            {/*end individual single session*/}
            <br></br>

            {/*start individual sessions package*/}
            <Container
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <Row>
                <Col md={5}>
                  <h4>Individual Catching Sessions Package</h4>
                  <h4>DESCRIPTION: 5 Sessions Package (1 hour each)</h4>
                </Col>
                <Col>
                  <h6>
                    Date: 2023 <br></br>
                    Location: 301_CATCHING HQ <br></br>
                    Time: 9am-12pm <br></br>
                    Cost: $425 <br></br>
                  </h6>
                </Col>
                <Col className="mt-5">
                  <button className="btn btn-primary">Register & Pay</button>
                </Col>
              </Row>
            </Container>
            {/*end individual sessions package*/}
          </Container>
          {/*end individual sessions container*/}
          <br></br>

          <br></br>
          {/*start custom group sessions container*/}
          <Container>
            <br></br>
            {/*start custom group single sessions*/}
            <Container
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <Row>
                <Col md={5}>
                  <h4>GROUP: single session</h4>
                  <h4>DESCRIPTION:</h4>
                </Col>
                <Col>
                  <h6>
                    Date: 2023 <br></br>
                    Location: 301_CATCHING HQ <br></br>
                    Time: 9am-12pm <br></br>
                    Cost: $50 <br></br>
                  </h6>
                </Col>
                <Col className="mt-5">
                  <button className="btn btn-primary">Register & Pay</button>
                </Col>
              </Row>
            </Container>
            {/*end custom group single sessions*/}
            <br></br>
            {/*start custom group package sessions*/}
            <Container
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <Row>
                <Col md={5}>
                  <h4>GROUP: sessions package</h4>
                  <h4>DESCRIPTION:</h4>
                </Col>
                <Col>
                  <h6>
                    Date: 2023 <br></br>
                    Location: 301_CATCHING HQ <br></br>
                    Time: 9am-12pm <br></br>
                    Cost: $50 <br></br>
                  </h6>
                </Col>
                <Col className="mt-5">
                  <button className="btn btn-primary">Register & Pay</button>
                </Col>
              </Row>
            </Container>
            {/*end custom group package sessions*/}
          </Container>
          {/*end custom group sessions container*/}
          <br></br>
          <br></br>

          {/*start All inlusive group sessions container*/}
          <Container>
            {/*start individual inclusive session date of: */}
            <Container
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <Row>
                <Col md={5}>
                  <h4>GROUP SESSION</h4>
                  <h4>DESCRIPTION:</h4>
                </Col>
                <Col>
                  <h6>
                    Date: 2023 <br></br>
                    Location: 301_CATCHING HQ <br></br>
                    Time: 9am-12pm <br></br>
                    Cost: $50 <br></br>
                  </h6>
                </Col>
                <Col className="mt-5">
                  <button className="btn btn-primary">Register & Pay</button>
                </Col>
              </Row>
            </Container>
            {/*end individual inclusive session date of: */}
          </Container>
          {/*end All inlusive group sessions container*/}
        </Container>
        {/* start all sessions container*/}
      </div>
    </>
  );
}
