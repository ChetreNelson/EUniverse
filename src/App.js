import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Book from "./pages/bookpage/Book";
import Bookdetail from "./pages/bookdetails/Bookdetail";
import Login from "./pages/loginpage/Login";
import Footer from "./Components/Footer/Footer";
import About from "./pages/footerpage/About";
import Contact from "./pages/footerpage/Contact";
import Privacy from "./pages/footerpage/Privacy";
import Terms from "./pages/footerpage/Terms";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Book />} />
          <Route path="/book-details/:id" element={<Bookdetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
