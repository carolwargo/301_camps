import React from "react";
import { Row } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Camps() {
  return (
    <div className="camp-container"
    style={{fontFamily:'bellota text'}}>
       
        <Row col={12}
        style={{
          color: "white ",
          textAlign: "start",
          backgroundColor: "black",
        }}
      >
   
          
           
              <Card.Header>CAMP #1</Card.Header>
              <Card.Body>
                <Card.Title>CATCHING CAMP</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
           
       
    
     
       
            
              <Card.Header>CAMP #1</Card.Header>
              <Card.Body>
                <Card.Title>CATCHING CAMP</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
   
       

      </Row>
    </div>
  );
}


