import React, { useState } from "react";

const WaiverModal = ({ showModal, closeModal, handleSubmit }) => {
  const [agree, setAgree] = useState(false);

  const handleCheckboxChange = () => {
    setAgree(!agree);
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Liability Waiver and Release of Claims</h2>
        <p>
          {/* Your waiver content here */}
        </p>
        <label htmlFor="agreeCheckbox">
          <input 
            type="checkbox" 
            id="agreeCheckbox" 
            checked={agree} 
            onChange={handleCheckboxChange}
          /> I agree to the waiver
        </label>
        <button 
          id="submitBtn" 
          onClick={() => handleSubmit(agree)}
          disabled={!agree}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default WaiverModal;
