import React from "react";
import logo from "../assets/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  MdContacts,
  MdEvent,
  MdHome,
  MdLabelOutline,
  MdPeople,
} from "react-icons/md";
const Sidebar = ({ open, close }) => {
  const { pathname } = useLocation();
  const checkPath = path => {
    return pathname === path;
  };

  const closenav = e => {
    close(false);
  };

  return (
    <div
      onClick={closenav}
      className={`side-overlay ${open ? " toggle" : " "}`}
    >
      <div className="side">
        <div className="container__logo">
          <img className="logo__img" src={logo} />
          <div className="logo__name">GDG Lafia</div>
        </div>
        <div className="list">
          <Link
            onClick={() => close(false)}
            to={"/"}
            className={`list__tile${checkPath("/") ? " side-bar-active" : ""}`}
          >
            <MdHome className="list__icons" />
            <div className="list__text">Home</div>
          </Link>
          <Link
            onClick={() => close(false)}
            to={"/event"}
            className={`list__tile${
              checkPath("/event") ? " side-bar-active" : ""
            }`}
          >
            <MdEvent className="list__icons" />
            <div className="list__text">Events</div>
          </Link>
          <Link
            onClick={() => close(false)}
            to={"/team"}
            className={`list__tile${
              checkPath("/team") ? " side-bar-active" : ""
            }`}
          >
            <MdPeople className="list__icons" />
            <div className="list__text">Team</div>
          </Link>
          <Link
            onClick={() => close(false)}
            to={"/about"}
            className={`list__tile${
              checkPath("/about") ? " side-bar-active" : ""
            }`}
          >
            <MdLabelOutline className="list__icons" />
            <div className="list__text">About</div>
          </Link>
          <Link
            onClick={() => close(false)}
            to={"/contact"}
            className={`list__tile${
              checkPath("/contact") ? " side-bar-active" : ""
            }`}
          >
            <MdContacts className="list__icons" />
            <div className="list__text">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
