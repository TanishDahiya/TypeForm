import React, { useState, useEffect } from "react";
import "../utils/css/typeform.css";
import { fields } from "../utils/constants";


function Typeform() {
  const [formData, setFormData] = useState({});
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    const width = Math.round(((currentFieldIndex + 1) / fields.length) * 100);
    setProgressBarWidth(width);
  }, [currentFieldIndex]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  const currentField = fields[currentFieldIndex];

  const validateField = () => {
    if (currentField.name === "name") {
      const nameRegex=/^[A-Za-z]{3,}$/;
      if(formData.name && !nameRegex.test(formData.name)){
        return "Invalid input or min 3 characters";
      }
    }
    if (currentField.name === "lastname") {  
      const nameRegex=/^[A-Za-z]{3,}$/;
      if(formData.lastname && !nameRegex.test(formData.lastname)){
        return "Invalid input or min 3 characters";
      }
    }
    if (currentField.name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (formData.email && !emailRegex.test(formData.email)) {
        return "Invalid email address";
      }
    }
    if (currentField.name === "phone") {
      const phoneRegex = /^\d{10}$/;
      if (formData.phone && !phoneRegex.test(formData.phone)) {
        return "Invalid phone number";
      }
    }
    return "";
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const validationError = validateField();
      if (!validationError && currentFieldIndex < fields.length - 1) {
        setCurrentFieldIndex(currentFieldIndex + 1);
      }
    }
  };

  console.log(formData);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div
          className="progress-bar"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
 
        <div className="typeDiv">
          <div className="typeDiv2">
            <div className="form-label">
              <div className="form-prevData">
                <label className="typeform" htmlFor={currentField.name}>
                  {currentField.label}
                </label>
                <p>{currentField.name === "lastname" && formData.name}</p>
              </div>
            </div>
            {currentField.type === "textarea" ? (
              <textarea
                id={currentField.name}
                name={currentField.name}
                value={formData[currentField.name] || ""}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder={currentField.placeholder}
                autoFocus
              />
            ) : currentField.type === "select" ? (
              <select
                id={currentField.name}
                name={currentField.name}
                value={formData[currentField.name] || ""}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                autoFocus
              >
                <option value="">Select an option</option>
                {currentField.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className="form-input "
                id={currentField.name}
                type={currentField.type}
                name={currentField.name}
                value={formData[currentField.name] || ""}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder={currentField.placeholder}
                autoFocus
              />
            )}
            <div>{validateField()}</div>
            {currentFieldIndex > 0 && (
              <button
                type="button"
                onClick={() => setCurrentFieldIndex(currentFieldIndex - 1)}
              >
                Previous
              </button>
            )}
            {currentFieldIndex < fields.length - 1 && (
              <button
                className="form-button"
                type="button"
                onClick={() => {
                  const validationError = validateField();
                  if (!validationError) {
                    setCurrentFieldIndex(currentFieldIndex + 1);
                  }
                }}
              >
                Next
              </button>
            )}
            {currentFieldIndex === fields.length - 1 && (
              <button type="submit">Submit</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Typeform;
