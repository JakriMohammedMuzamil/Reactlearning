import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <h2>iHub IT Solutions</h2>
        <div className="info">
         <Link  to="/"><h3>Home</h3></Link>
         <Link  to="/about"><h3>About</h3></Link>
         <Link  to="/contact"><h3>Contact</h3></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
