import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="bg-amber-700">
      <div className="flex justify-center items-center gap-10">
        <Link to='men'>
          <h2>men</h2>
        </Link>
        <Link to='women'>
          <h2>women</h2>
        </Link>
        <Link to='kids'>
          <h2>kids</h2>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
