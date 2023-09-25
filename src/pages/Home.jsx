import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import InfoIcon from "@mui/icons-material/Info";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";


import "../style/home.css";

export default function Home() {
  return (
    <>
      {/* HEADER START */}
      <div className="container-body">
        <div className="main-col">
          <div className="content-container">
            <div className="content">
              {/*<h2>WELCOME TO</h2>*/}
              <h1 className="pb-3"
              style={{
                fontSize:'6rem',
                fontWeight:'bold',
                color:'white',
              }}>301_CATCHING</h1>
              <h4>
                The
                <span className="red-text"> "FOUNDATIONAL EXPERTS"</span> for
                everything catching: 
                <br></br>
                Providing Players with the skills to master their craft & elevate their game.
              </h4>
            </div>
            <h3 className="pt-4">
            <div className="events">
              <Button className="events-anchor bg-white" id="#upcoming">
                <a href="learn-more">Lean More...</a>
              </Button>
            </div>
            </h3>

          </div>
        </div>
      </div>

      <div className="bg-black text-white p-5" id="upcoming">
                <h2>UPCOMING</h2>
                <h4 className="pt-4">
                  camps, clinics & events
                </h4>
              </div>
      {/* HEADER END */}
      <div className="anchor-learn-more">
              <Button className="learn-more-anchor bg-white">
                <a href="learn-more">Lean More...</a>
              </Button>
            </div>
      {/*TIMELINE START */}
      <Timeline position="alternate">
        {/*ANCHOR LINK "learn-more-Container" START */}
        <Container className="learn-more-container">
          <h1>
            <span className="red-text" id="sign-up">
              LEARN MORE
            </span>
          </h1>
          <p>
            {" "}
            Follow the step-by-step guide below <br></br>and unlock the benefits
            of 301_catching:
          </p>
        </Container>
        {/*ANCHOR LINK "learn-more-Container" END */}

        {/*"1. WHO WE ARE" start*/}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER IMAGE OF SORT */}
            About Us
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <InfoIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span"></Typography>
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER TEXT FOR TRAINING */}
            <Typography>
              <Container className="training-card" style={{ margin: "20px" }}>
                <h3 className="timeline-header">Step 1: WHO WE ARE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero sint sit deserunt cupiditate tempore alias. Nobis rem
                  alias architecto porro vel quisquam iste beatae suscipit
                  voluptatum. Voluptas sapiente modi deserunt?
                </p>
              </Container>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/*"1. WHO WE ARE" end*/}

        {/*"2. WHAT WE DO" start*/}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER IMAGE OF SORT */}
            Training Services
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <FitnessCenterIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span"></Typography>
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER TEXT FOR TRAINING */}
            <Typography>
              <Container className="training-card" style={{ margin: "20px" }}>
                <h3 className="timeline-header">Step 2: WHAT WE DO</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero sint sit deserunt cupiditate tempore alias. Nobis rem
                  alias architecto porro vel quisquam iste beatae suscipit
                  voluptatum. Voluptas sapiente modi deserunt?
                </p>
              </Container>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/*"2. WHAT WE DO" end*/}



        {/*"1. WHO WE ARE" start*/}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER IMAGE OF SORT */}
            Sign Up Today!
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LockIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span"></Typography>
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER TEXT FOR TRAINING */}
            <Typography>
              <Container className="training-card" style={{ margin: "20px" }}>
                <h3 className="timeline-header">Step 3: SIGN UP</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero sint sit deserunt cupiditate tempore alias. Nobis rem
                  alias architecto porro vel quisquam iste beatae suscipit
                  voluptatum. Voluptas sapiente modi deserunt?
                </p>
                


              </Container>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/*"1. WHO WE ARE" end*/}



        {/*"1. SIGN UP START */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
           <Typography>
              {/* Sign-up Form START */}
              <Col sm={10} className="register-form-col">
                <Container className="register-form" style={{ margin: "20px" }}>
                  <h5 id="sign-up">Sign Up Today!</h5>
                  <p>fill out the form below and press submit</p>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check it out" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Container>
              </Col>
              {/*1. SIGNUP FORM end*/}
            </Typography>
          </TimelineOppositeContent>
          <TimelineDot color="primary">
          <LockOpenIcon />
          </TimelineDot>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          ></TimelineOppositeContent>
        </TimelineItem>
       
          
        {/* "SIGNUP FORM" End */}
      </Timeline>

    </>
  );
}