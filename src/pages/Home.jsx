import React from "react";
import { NavLink } from "react-router-dom";

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
              <h1>301 CATCHING</h1>
              <h4 style={{fontFamily:'serif'}}> The <span className="red-text"> "FOUNDATIONAL EXPERTS"</span> for
                everything catching:
                <br></br>
                Providing Players with the skills to master their craft &
                elevate their game.
              </h4>
              
              <h2 className="pt-3 mt-4 pb-2 text-decoration-underline">
  UPCOMING <span>Events</span>
</h2>
<h5 className="pb-3">
  Explore upcoming camps, clinics, and events with 301_CATCHING!
  <span style={{ color: "red" }}><br></br>Click "LEARN MORE"</span> to get started.
</h5>
<div className="btn-container">
  <NavLink
    to="/about"
    className="signup-btn"

  >
    LEARN MORE
  </NavLink>
</div>







            </div>
          </div>
        </div>
      </div>

    
    </>
  );
}
