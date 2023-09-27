import React from "react";

import Form from "react-bootstrap/Form";

import "../style/train.css";

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
        }}
      >
        <h1
          style={{
            fontFamily: "bellota text",
            backgroundColor: "white",
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
            backgroundColor: "white",
            color: "black",
            paddingTop: "2rem",
            paddingBottom: "2rem",

            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          CLINICS & EVENTS
        </h2>
        <div className="evaluation-container">
          <h2>IN-PERSON TRAINING</h2>

          <h5>How it works</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea
            quae quos, eaque aliquam perspiciatis impedit molestiae iste
            repudiandae dolore voluptatibus minus non facere voluptatum
            necessitatibus ducimus veritatis distinctio saepe!
          </p>
          <h5>What you get</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            delectus explicabo nam? Quas eius consectetur explicabo ex fuga
            illum tempora voluptate nobis labore sit rem voluptatum, laudantium
            culpa voluptatem dignissimos?
          </p>
          <h5>Pricing</h5>
          <p>1 video - $25</p>
          <h5>What you get</h5>
          <p>1. 10 minute video evaluation</p>

          <br></br>
          <h2>VIRTUAL EVALUATION</h2>
          <h4>Video Upload</h4>

          <h5>How it works</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea
            quae quos, eaque aliquam perspiciatis impedit molestiae iste
            repudiandae dolore voluptatibus minus non facere voluptatum
            necessitatibus ducimus veritatis distinctio saepe!
          </p>
          <h5>What you get</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            delectus explicabo nam? Quas eius consectetur explicabo ex fuga
            illum tempora voluptate nobis labore sit rem voluptatum, laudantium
            culpa voluptatem dignissimos?
          </p>
          <h5>Pricing</h5>
          <p>1 video - $25</p>
          <h5>What you get</h5>
          <p>1. 10 minute video evaluation</p>
        </div>
        <div className="evaluation-form">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload your video</Form.Label>
            <Form.Control type="file" />
            <button type="submit">Submit</button>
          </Form.Group>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Upload video</Form.Label>
            <Form.Control type="file" multiple />
            <button type="submit">Submit</button>
          </Form.Group>

          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Upload large video option</Form.Label>
            <Form.Control type="file" size="lg" />
            <button type="submit">Submit</button>
          </Form.Group>
        </div>
      </div>
    </>
  );
}
