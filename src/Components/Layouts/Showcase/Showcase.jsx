import React from "react";
import "./showcase.css";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import SerachInputForm from "../../Form/SearchInputForm/SerachInputForm";
const Showcase = () => {
  return (
    <section className="showcase-container">
      <div className="overlay"></div>
      <div className="showcase-content">
        <h1>Best books are avialabe</h1>
        <p>Buy quality books at chepaer price</p>
        <div className="get-started">
        <button className="button-Get-Started" ><Link style={{textDecoration:'none'}} to='/books'>Get Started</Link></button>
        </div>
      </div>
      
    </section>
  );
};

export default Showcase;
