import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Book from "./pages/bookpage/Book";
import Bookdetail from "./pages/bookdetails/Bookdetail";
import Login from "./pages/loginpage/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book-details/:id" element={<Bookdetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
