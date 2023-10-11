import { useState } from "react";
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
            <div>
                <h1>Register for Individual-Single Session</h1>
                <div>
                    <Form onSubmit={handleSubmit}>
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
            <Form.Group controlId="player dob">
                <Form.Label>Player D.O.B.</Form.Label>
                <Form.Control
                    type="dob"
                    placeholder="Enter player date of birth"
                    value={dob}
                    onChange={(e) => setdob(e.target.value)}
                    className="form-control"
                />
            </Form.Group>
            
            <Form.Group controlId="waiverCheckbox" className="form-check">
                <Form.Check
                    type="checkbox"
                    id="waiverCheckbox"
                    checked={waiver}
                    onChange={(e) => setWaiver(e.target.checked)}
                    label="I agree to the waiver"
                />
            </Form.Group>
            <button type="submit">
                Submit Registration
            </button>
        </Form>
                </div>
            </div>
        )
}

    