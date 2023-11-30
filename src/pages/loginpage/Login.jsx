import React ,{useEffect} from "react";
import "./signnup.css";
import signupimg from '../../Components/Assets/signupimg.jpg'
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <>
    <Navbar/>
    <section className="signup-container">
      <div className="signup-img-container">
        <img src={signupimg} alt="authentication-background" />
      </div>
      <div className="signup-content-container">
      <div className="content-wrapper">
        <h2>Login</h2>
        <p>Create a new Account</p>

        <form >
          
            <div className="form-group">
              <input type="email" className="form-input" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
              <input type="password" className="form-input" placeholder="Enter your password"/>
            </div>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            <div className="form-group">
              <input type="submit" className="button-primary" placeholder="Enter your password"/>
            </div>
        </form>
      </div>
      </div>

    </section>
    </>
  );
  };

export default Login;