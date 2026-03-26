import React, { useState } from "react";

const RequirementForm = () => {
  const [type, setType] = useState("buy");

  return (
    <div className="form-container">
      <h2 className="form-title">Tell Us Your Requirement</h2>

      {/* Toggle */}
      <div className="toggle">
        <button
          className={type === "buy" ? "active" : ""}
          onClick={() => setType("buy")}
        >
          I want to Buy
        </button>
        <button
          className={type === "sell" ? "active" : ""}
          onClick={() => setType("sell")}
        >
          I want to Sell
        </button>
      </div>

      {/* Form */}
      <form className="form">
        <input
          className="input-field requirement-input"
          type="text"
          placeholder="I want quotes for (Requirement description) *"
        />

        <input
          className="input-field vessel-input"
          type="text"
          placeholder="Vessel Name *"
        />

        <input
          className="input-field company-input"
          type="text"
          placeholder="Company Name"
        />

        <div className="row">
          <input
            className="input-field email-input"
            type="email"
            placeholder="Business Email Id *"
          />

          <div className="phone-group">
            <select className="input-field">
              <option>+91</option>
              <option>+1</option>
            </select>

            <input
              className="input-field phone-input"
              type="text"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div className="file-upload">
          <input className="input-field file-input" type="file" />
          <span>Attach file (PDF, max 15MB)</span>
        </div>

        <textarea
          className="input-field remarks-input"
          placeholder="Remarks"
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit Requirement
        </button>
      </form>
    </div>
  );
};

export default RequirementForm;