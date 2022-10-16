import React, { useRef } from "react";
import "./comstyles.css";
import { MdDashboard, MdGroup, MdRoundedCorner, MdToc } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Bottomnav({}) {
  const { pathname } = useLocation();
  const checkPath = path => {
    window.scrollTo({
      top: "0",
    });
    return pathname === path;
  };

  return (
    <div className="bottom-nav">
      <Link
        to={"/"}
        className={`bottom__link${checkPath("/") ? " bottom-nav-active" : " "}`}
      >
        <MdDashboard className="bottom__icon" />
        <div className="bottom__text">Home</div>
      </Link>

      <Link
        to={"/event"}
        className={`bottom__link${
          checkPath("/event") ? " bottom-nav-active" : " "
        }`}
      >
        <MdRoundedCorner className="bottom__icon" />
        <div className="bottom__text">Events</div>
      </Link>

      <Link
        to={"/team"}
        className={`bottom__link${
          checkPath("/team") ? " bottom-nav-active" : " "
        }`}
      >
        <MdGroup className="bottom__icon" />
        <div className="bottom__text">Team</div>
      </Link>
      <Link
        to={"/about"}
        className={`bottom__link${
          checkPath("/about") ? " bottom-nav-active" : " "
        }`}
      >
        <MdToc className="bottom__icon" />
        <div className="bottom__text">About</div>
      </Link>
    </div>
  );
}

export default Bottomnav;
