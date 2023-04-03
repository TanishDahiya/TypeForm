import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../utils/css/formwrapper.css";

function FormWrapper() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        buttonRef.current.click();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className="form-wrapper">
      <div className="form-wrapper-content">
        <div>
          {" "}
          <h1 className="form-wrapper-head">
            Up-skilling requires time commitment
          </h1>
        </div>

        <div className="form-wrapper-para">
          <p>
            The GrowthX experience is designed by keeping in mind the working
            hours founders & full time operators typically work in.
          </p>
          <div className="form-wrapper-lists">
            <ul>
              <li>-You will spend 6 hours/week for the first 5 weeks</li>
              <li>-You will spend 15 hours/week for the last 3 weeks</li>
            </ul>
          </div>
        </div>
        <div className="form-wrapper-enter">
          <Link to="/typeform">
            <button className="form-wrapper-button" ref={buttonRef}>
              I agree
            </button>
          </Link>
          <p>press Enter ↵</p>
        </div>
      </div>
    </div>
  );
}

export default FormWrapper;
