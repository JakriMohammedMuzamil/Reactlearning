import React from "react";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import ProductHome from "./pages/ProductHome";
import Notfound from "./pages/Notfound";
import CourseDetail from "./pages/CourseDetail";

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route index element={<ProductHome />} />
          <Route path="men" element={<Mens />} />
          <Route path="women" element={<Womens />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
