import React from "react";
import "./showcase.css";
import Navbar from "../../Navbar/Navbar";
import SerachInputForm from "../../Form/SearchInputForm/SerachInputForm";
const Showcase = () => {
  return (
    <section className="showcase-container">
      <div className="overlay"></div>
      <div className="showcase-content">
        <h1>Best books are avialabe</h1>
        <p>Buy quality books at chepaer price</p>
        <SerachInputForm/>
      </div>
      
    </section>
  );
};

export default Showcase;
