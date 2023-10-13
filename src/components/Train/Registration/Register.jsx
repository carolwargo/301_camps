import { useState } from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import Form from "react-bootstrap/Form";


export default function Registration() {
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Registration form submitted:", first, last, dob);
            // Add your sign-up logic here
        };
        
        const [waiver, setWaiver] = useState(false);
        const [first, setFirstName] = useState("");
        const [last, setLastName] = useState("");
        const [dob, setdob] = useState("");
       

        return (
            <div >
                <Container className="bg-black text-white">
                <Row className="p-5">
                    <Col md={5}>
                <h1>REGISTRATION</h1>
                <p  style={{color: 'red'}}>INDIVIDUAL<br></br>SINGLE SESSION- <strong> $75.00</strong> </p>
             

                   <li>1 hour</li>
                   <li>1 Player</li>
                   <li>1 Coach</li>
               
                
                <h5 className="text-decoration-underline mt-3"> <strong>FUNDAMENTALS</strong></h5>
                    
                    <li>receiving</li>
                    <li>blocking</li>
                    <li>stance</li>
                    <li>throwing</li>
                    <li>mobility</li>
                    <li>mindset</li>
                    <li>situational preparation</li>
              
                </Col>
               <Col md={7}>
               <Container className="p-4 bg-secondary rounded-2">
                    <Form onSubmit={handleSubmit}>
           <Form.Group controlId="first" className="mb-3">
                <Form.Label>Player First Name</Form.Label>
                <Form.Control
                    type="first"
                    placeholder="Enter first name"
                    value={first}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                />
            </Form.Group>
            <Form.Group controlId="last" className="mb-3">
                <Form.Label>Player Last Name</Form.Label>
                <Form.Control
                    type="last"
                    placeholder="Enter last name"
                    value={last}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                />
            </Form.Group>
            <Form.Group controlId="player dob" className="mb-3">
                <Form.Label>Player date of birth</Form.Label>
                <Form.Control
                    type="dob"
                    placeholder="Enter date of birth"
                    value={dob}
                    onChange={(e) => setdob(e.target.value)}
                    className="form-control"
                />
            </Form.Group>
            
            <Form.Group controlId="waiverCheckbox" className="form-check mb-3">
                <Form.Check
                    type="checkbox"
                    id="waiverCheckbox"
                    checked={waiver}
                    onChange={(e) => setWaiver(e.target.checked)}
                    label="By checking this box, I agree to the waiver and release of liability." 
                /> <NavLink to='/waiver' className="text-decoration-underline"
                style={{marginLeft: "1.5rem"}}
                >
                    terms & conditions
                    </NavLink>
            </Form.Group>
            <div className="d-flex justify-content-end">
    <button
        type="submit"
        className="btn btn-primary ml-auto"
        style={{
            borderRadius: "10px",
            backgroundColor: "black",
            color: "white",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
            transition: "background-color 0.6s ease, box-shadow 0.3s ease",
        }}
    >
        Submit Registration
    </button>
</div>

        </Form>
                </Container>
                </Col>
                </Row>
              
                </Container>
            </div>
        )
}

    