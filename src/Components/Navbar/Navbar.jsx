import React, { useState ,useEffect} from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu,setMenu]=useState("home");
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{color: isSticky ? 'white' : 'var(--primary-color)',textDecoration:'none'}} to='/' >Home</Link> {menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("books")}}><Link style={{color: isSticky ? 'white' : 'var(--primary-color)',textDecoration:'none'}}  to ='/books' >Books</Link> {menu==="books"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("categories")}}><Link style={{color: isSticky ? 'white' : 'var(--primary-color)',textDecoration:'none'}}  to ='/categories' >Categories</Link> {menu==="categories"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("authors")}}><Link style={{color: isSticky ? 'white' : 'var(--primary-color)',textDecoration:'none'}} to ='/authors' >Authors</Link> {menu==="authors"?<hr/>:<></>}</li>
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
