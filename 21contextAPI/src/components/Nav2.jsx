import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Nav2 = () => {

    //using the value provided by themecontext 
   const data = useContext(ThemeContext)
  return (
    <div className="nav2">
      <h2>home</h2>
      <h2>about</h2>
      <h2>contact</h2>
      <h2>{data}</h2>
    </div>
  );
};

export default Nav2;
