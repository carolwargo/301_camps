import React from "react";
import Cover from "../assets/images/Cover.png";

export default function Header() {
  const bgImageHeader = {
    backgroundImage: `url(${Cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "8rem",
    width: "80%",
    height: "100%",
    textAlign: "center",
    position: "absolute", // Set position to relative
  };

  const overlay = {
    content: "",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .45)" /* Black with 24% opacity */,
  };

  return (
    <div className="container-fluid">
      <div className="bg-image  text-center" style={bgImageHeader}>
        <div className="overlay " style={overlay}>
          <div className="row"
          style={{ color: "white"}}
          >
          <h1
            style={{
              fontFamily: "Poppins",
              textDecoration: "bold",
              fontSize: "5rem",
              marginTop: "2.5rem",
            }}
          >
            WELCOME!
          </h1>
          <h4
            style={{
              fontFamily: "bellota text",
              textDecoration: "bold"
            }}
          >
            DIGITAL RESUME & PORTFOLIO{" "}
          </h4>
        </div>
      </div>
      </div>
  
    </div>
  );
}