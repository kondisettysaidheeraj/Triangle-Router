import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './App.css';

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
        <Link to="/Triangle">
          <li>is triangle ?</li>
          </Link>
          <Link to="/">
          <li>quiz </li> </Link>
          <Link to="/Hypotense">
          <li>Hypotense </li></Link>
          <Link to="/Area">
          <li >Area of triangle </li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
