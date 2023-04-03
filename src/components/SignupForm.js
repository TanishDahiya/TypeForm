import React, { useEffect, useState } from "react";
import "../utils/css/signup.css";
import { signupApi } from "../utils/api-calling.js";

function SignupForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const handleChange = (e, props) => {
    setUserData({ ...userData, [props]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    signupApi(userData)
      .then((resp) => {
        console.log(resp);
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  };
  return (
    <div className="signupParent">
      <div className="card">
        <h1 className="card__title">Create your account</h1>
        <button type="button" className="buttonlogo">
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g
              id="Google-Button"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <rect x="0" y="0" width="40" height="40" rx="2"></rect>
              <g
                id="logo_googleg_48dp"
                transform="translate(10.5, 10.5) scale(1.1)"
              >
                <path
                  d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727  17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                  id="Shape"
                  fill="#4285F4"
                ></path>
                <path
                  d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727  3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182  C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                  id="Shape"
                  fill="#34A853"
                ></path>
                <path
                  d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9  C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182  L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727  0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                  id="Shape"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455  L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0  2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727  6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                  id="Shape"
                  fill="#EA4335"
                ></path>
                <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape"></path>
              </g>
            </g>
          </svg>
          <div className="card__icon">
            <div className="cardtext">Signup with google</div>
          </div>
        </button>

        <h3 className="card__head">
          <span className="spanhead">or</span>
        </h3>
        {/* Form Started  */}
        <form className="card__form" onSubmit={submitForm}>
          <label className="card__label" htmlFor="name">
            Full Name
          </label>

          <input
            className="card__input"
            type="text"
            id="fname"
            placeholder=""
            onChange={(e) => handleChange(e, "name")}
            value={userData.name}
          />
          <label className="card__label" htmlFor="email">
            Email Address
          </label>
          <input
            className="card__input"
            type="email"
            id="email"
            placeholder="your@email.com"
            onChange={(e) => handleChange(e, "email")}
            value={userData.email}
          />
          <label className="card__label" htmlFor="password">
            Password
          </label>

          <input
            className="card__input"
            type="password"
            id="password"
            placeholder=""
            onChange={(e) => handleChange(e, "password")}
            value={userData.password}
          />

          <label className="card__label" htmlFor="about">
            About
          </label>

          <input
            className="card__input"
            type="text"
            id="about"
            placeholder=""
            onChange={(e) => handleChange(e, "about")}
            value={userData.about}
          />
          <button className="btn btn--submit formButton" type="submit">
            Get started
          </button>
        </form>
        <p className="card__text">
          Already have an account?
          <a className="card__link" href="">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
