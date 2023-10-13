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
        Liability Waiver and Release of Claims

I, [Full Name], hereby acknowledge that I am voluntarily participating in [Activity/Event] organized by [Organization/Company]. I understand that there are certain risks associated with this activity, including but not limited to [list of potential risks, e.g., physical injury, property damage, etc.].

In consideration of being allowed to participate in this activity, I hereby release, waive, discharge, and covenant not to sue [Organization/Company], its officers, employees, and agents from any and all liability, claims, demands, actions, and causes of action whatsoever arising out of or related to any loss, damage, or injury, including death, that may be sustained by me or any property belonging to me, while participating in such activity.

I am voluntarily electing to participate in this activity with full knowledge of the inherent risks involved and I hereby assume all risks of loss, damage, or injury that may be sustained by me. I understand that this waiver and release of liability will bind my heirs, executors, administrators, and assigns, as well as myself.

I have read this release and waiver of liability and fully understand its terms. I understand that I am giving up substantial rights, including my right to sue. I acknowledge that I am signing the agreement freely and voluntarily, and intend by my signature to be a complete and unconditional release of all liability to the greatest extent allowed by law.


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
