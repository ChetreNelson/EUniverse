import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu,setMenu]=useState("home");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/' >Home</Link> {menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("books")}}><Link style={{textDecoration:'none'}}  to ='/books' >Books</Link> {menu==="books"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("categories")}}><Link style={{textDecoration:'none'}}  to ='/categories' >Categories</Link> {menu==="categories"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("authors")}}><Link style={{textDecoration:'none'}} to ='/authors' >Authors</Link> {menu==="authors"?<hr/>:<></>}</li>
      </ul>
      <div className="login">
       <input type="text" placeholder="Search Books..." />
        <button className="button-primary" ><Link style={{textDecoration:'none'}} to='/books'>Search</Link></button>
        <button className="button-primary" ><Link style={{textDecoration:'none'}} to='/login'>Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
