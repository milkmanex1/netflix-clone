import React, { useEffect, useState } from "react";
import "./Navbar.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useStateValue } from "./StateProvider";

const Navbar = () => {
  const [{ loggedUser }, dispatch] = useStateValue();

  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar-black"}`}>
      <div className="nav-logo">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="netflix logo"
        />
      </div>
      <div className="links-container">
        <div className="links">
          <a className="link" href="">
            Home
          </a>

          <a className="link" href="">
            Series
          </a>

          <a className="link" href="">
            Films
          </a>

          <a className="link" href="">
            New & Popular
          </a>

          <a className="link" href="">
            My List
          </a>
        </div>
      </div>
      <div className="right-side">
        <div className="search">
          <SearchIcon></SearchIcon>
        </div>
        <div className="notification">
          <NotificationsIcon></NotificationsIcon>
        </div>
        <div className="nav-avatar-container">
          <div className="nav-avatar">
            <img
              className="img"
              src={
                loggedUser.avatar ||
                "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
              }
              alt="netflix smiley icon"
            />
            <div className="dropdown">
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
