import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-cyan-800 flex justify-between px-4 py-8 pr-10">
      <h2 className="text-4xl">iHub IT Solutions</h2>
      <div className="flex gap-10 text-xl justify-center items-center px-4">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/product">
          <h3>Product</h3>
        </Link>
        <Link to="/courses">
          <h3>Courses</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
