import React from "react";
import Container from "react-bootstrap/Container";

export default function Consent() {
  return (
    <div className="text-messaging" id="text-messaging">
      <Container>
        <br></br>
        <br></br>
        <h5>TEXT-MESSAGING</h5>
        TERMS OF USE: Consent to Receive Text Messages- By providing your mobile
        phone number and opting in to receive text messages, you are consenting
        to receive non-marketing and marketing text messages from 301CATCHING &
        its affliates, at the number provided. Message and data rates may apply.
        Types of Messages You may receive the following types of text messages:
        <ul>
          <li>
            Transaction Notifications: Updates and notifications related to your
            account or transactions.
          </li>
          <li>
            Service Alerts: Information about service interruptions,
            maintenance, or other important updates.
          </li>
          <li>
            Marketing Messages: Promotional offers, discounts, and information
            about our products or services. Opting Out You can opt out of
            receiving text messages at any time by replying "STOP" to any
            message you receive. This will unsubscribe you from all text message
            communications.
          </li>
          <li>
            Data Usage and Privacy We respect your privacy. Your mobile number
            will only be used for the purposes of sending text messages related
            to [Your Company Name]. We will not share or sell your mobile number
            to third parties.
          </li>
          Help and Support For help or support related to text messages, please
          contact our customer support team at{" "}
          <a href="mailto:301catching@gmail.com">301CATCHING@gmail.com</a> .
        </ul>
        <br></br>
        <h4>CONTACT US</h4>
        If you have any questions or concerns about these terms of use, please
        contact us at{" "}
        <a href="mailto:301catching@gmail.com">301catching@GMAIL.COM</a> .
        
        <p>
          <a href="/signup">Return to Sign Up</a>
        </p>
        <p>Follow to view site terms of use: 
          <a href="/consent">"Terms of Service"</a>
        </p>
      </Container>
    </div>
  );
}
