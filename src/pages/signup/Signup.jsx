import React, { useEffect } from "react";

import signupimg from "../../Components/Assets/signupimg.jpg";

const Signup = () => {
  return (
    <>
      <section className="signup-container">
        <div className="signup-img-container">
          <img src={signupimg} alt="authentication-background" />
        </div>
        <div className="signup-content-container">
          <div className="content-wrapper ">
            <h2>Sign Up</h2>
            <p> create a new Account</p>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-input"
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group">
                <input type="submit" className="button-primary" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
