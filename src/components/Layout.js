import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./layou.css";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
