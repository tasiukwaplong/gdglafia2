import React, { useState } from "react";
import "./comstyles.css";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const Navlinks = () => {
    let links = [
      { path: "/", Name: "Home" },
      { path: "/event", Name: "Event" },
      { path: "/team", Name: "Team" },
      { path: "/about", Name: "About" },
      { path: "/contact", Name: "Contact" },
    ];
    return links.map(({ path, Name }, i) => {
      return (
        <Link
          key={i}
          to={path}
          className={`nav__link${
            pathname === path ? " nav__link-active" : " "
          }`}
        >
          {Name}
        </Link>
      );
    });
  };
  return (
    <nav className="nav">
      <Sidebar open={toggle} close={setToggle} />
      <div className="nav__logo-container">
        <div onClick={() => setToggle(prev => !prev)} className="nav__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav__logo">GDG LAFIA</div>
      </div>
      <div className="nav__links-container">
        <Navlinks />
      </div>
    </nav>
  );
}

export default Navbar;
