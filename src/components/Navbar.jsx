import "../Styles/navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="logo">Purushothama T S</div>
        <div className="menu">
          <span>menu</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
