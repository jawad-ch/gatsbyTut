import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/blog/">blog</Link>
        </li>
        <li>
          <Link to="/example/">example</Link>
        </li>
        <li>
          <Link to="/images/">images</Link>
        </li>
        <li>
          <Link to="/output/">products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
