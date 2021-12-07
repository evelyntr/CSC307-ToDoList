import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEllipsisVerticalCircle } from "react-icons/io5";
import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <IoEllipsisVerticalCircle className="nav-icon" />
          ease
        </Link>
        <div className="color-mode" onClick={handleClick}>
          {click ? <BsLightbulb /> : <BsLightbulbFill />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
