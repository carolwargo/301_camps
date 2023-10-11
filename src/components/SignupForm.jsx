import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const SignUpForm = () => {
  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhone, setcellPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isConsentGiven) {
      console.log("Sign-up form submitted:", email, password);
      // Add your sign-up logic here
    } else {
      alert("Please provide your consent before submitting.");
    }
  };

  const handleCheckboxChange = () => {
    setIsConsentGiven(!isConsentGiven);
  };

  return (
    <div>
      <Container
        style={{
          paddingBottom: "2rem",
          paddingTop: "2rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          backgroundColor: "darkred",
          borderRadius: "10px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="first">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="first"
                  placeholder="Enter first name"
                  value={first}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="last">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="last"
                  placeholder="Enter last name"
                  value={last}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="cellPhone">
                <Form.Label>Cell Phone</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="xxx xxxxxxx"
                  value={cellPhone}
                  onChange={(e) => setcellPhone(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="consentCheckbox" className="form-check">
                <Form.Check
                  type="checkbox"
                  id="consentCheckbox"
                  checked={isConsentGiven}
                  onChange={handleCheckboxChange}
                  label={
                    <span style={{ fontSize: "11px" }}>
                     User consent{" "}
                      <a href="/consent">terms & conditions</a>
                    </span>
                  }
                />
              </Form.Group>
              <Form.Group controlId="textCheckbox" className="form-check">
                <Form.Check
                  type="checkbox"
                  id="textCheckbox"
                  checked={isConsentGiven}
                  onChange={handleCheckboxChange}
                  label={
                    <span style={{ fontSize: "11px" }}>
                     Messaging Opt-in{" "}
                      <a href="/textconsent">terms & conditions</a>
                    </span>
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="dark" type="submit" className="w-100 mt-4">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default SignUpForm;
