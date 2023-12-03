import React from "react";
import "./footer.css";
import logo from "../Assets/logo.png";
import { FaInstagram, FaSquareXTwitter, FaFacebook } from "react-icons/fa6";
import {} from "react-icons/fa";
import { Link } from "react-router-dom";

const handleLinkClick = () => {
  // Scroll to the top of the page when a link in the footer is clicked
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="footer-links">
        <li onClick={handleLinkClick}><Link style={{textDecoration:'none'}} to='/about' >About</Link></li>
        <li onClick={handleLinkClick}><Link style={{textDecoration:'none'}} to='/contact' >Contact Us</Link></li>
        <li onClick={handleLinkClick}><Link style={{textDecoration:'none'}} to='/terms' >Terms and Conditons</Link></li>
        <li onClick={handleLinkClick}><Link style={{textDecoration:'none'}} to='/privacy' >Privay Policy</Link></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-connector">
          <FaSquareXTwitter />
        </div>
        <div className="footer-icons-connector">
          <FaFacebook />
        </div>
        <div className="footer-icons-connector">
          <FaInstagram />
        </div>
      </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
