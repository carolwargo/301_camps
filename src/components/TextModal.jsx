// TextOptInModal.jsx
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TextOptInModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Text Message Opt-In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          By opting in to receive text messages, you agree to receive both
          non-marketing and marketing text messages from 301CATCHING.
        </p>
        <p>Message and data rates may apply.</p>
        <p>
          You may receive transaction notifications, service alerts, and
          marketing messages.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TextOptInModal;
