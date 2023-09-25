import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { NavLink } from "react-bootstrap";

const flowLinks = {
  display: "flex",
  justifyContent: "center",
};

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1
        style={{
          fontFamily: "bellota text",
          backgroundColor: "white",
          color: "black",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          fontSize: "4rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
        }}
      >
        CONTACT{" "}
      </h1>
      <div
        style={{
          fontFamily: "bellota text",
          backgroundColor: "black",
          color: "white",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        <p>
        Thanks for dropping by. Your presence is appreciated, and your{" "}
          <strong>
            {" "}
            <MDBIcon color="white" icon="share-from-square" className="me-1" />
            FEEDBACK is welcome... 
          </strong>{" "}
          As competators & lovers of the game, we know the value of different
          perspectives, they help us improve and excel. So, feel free to share
          your insights or provide any feedback you've got. Have questions, need
          advice, or just want to chat about the game? Hit me up!
          <br></br>
          <br></br>
        </p>
        <h5>
          Or if you have any questions, inquiries, or just want to say hello,
          I'd love to hear from you!{" "}
        </h5>
        <br></br>
        <MDBIcon icon="envelope" className="me-2 " style={{ color: "white" }} />
        EMAIL: <a href="mailto:301catching@gmail.com">
          301catching@GMAIL.COM
        </a>{" "}
        <br></br>
        <MDBIcon icon="phone" className="me-2" style={{ color: "white" }} />
        PHONE: <a href="tel:443-771-1708">443-771-1708</a> <br></br>
        <MDBIcon
          fab
          icon="twitter-square"
          className="me-2"
          style={{ color: "white" }}
        />
        TWITTER:{" "}
        <a href="https://www.github.com/carolwargo">GITHUB.COM/carolwargo</a>
      </div>
      <div className="bg-white">
        {/*flow-link <-previous-page & next-page->*/}
        <div className="flow-links " style={flowLinks}>
          <NavLink
            href="/portfolio"
            id="#portfolio"
            className="ml-5 pb-3 pt-3"
            style={{ color: "red" }}
          >
            <strong>← Back (HOME)</strong>
          </NavLink>

        </div>
      </div>
    </div>
  );
}
