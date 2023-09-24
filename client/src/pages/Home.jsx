import React from "react";
import Cover from "../assets/images/Cover.png";
import Camps from "../components/Camps";

export default function Header() {
  const bgImageHeader = {
    backgroundImage: `url(${Cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "90%",
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontFamily: "bellota text", 
  };

  const overlay = {
    content: "",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .45)" /* Black with 24% opacity */,
    color: "white",
  };

  return (
    <div>
      <div className="bg-image" style={bgImageHeader}>
        <div className="overlay" style={overlay}>
          <div className="header-home p-5 text-center ">
            <h1
              className="text-center"
              style={{
                fontSize: "5rem",
              }}
            >
              301_CATCHING
            </h1>

            <h3 className="mt-0">
              The
              <span className="red-text"> "FOUNDATIONAL EXPERTS"</span> for
              everything catching:
              <br></br>
              Providing Players with the skills to master their craft & elevate
              their game.
            </h3>
            <Camps  />
          </div>
        </div>
      </div>
    </div>
  );
}
