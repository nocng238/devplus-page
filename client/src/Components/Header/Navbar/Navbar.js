import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SliderShow from "../../SliderShow/SliderShow";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [sliderOpen, setSliderOpen] = useState(false);
  const menuToggle = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1000) {
      setSideBarOpen(!sideBarOpen);
    } else setMenuOpen(!menuOpen);
  };
  const submenuToggle = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const sliderToggle = () => {
    setSliderOpen(!sliderOpen);
  };
  useEffect(() => {
    console.log(sliderOpen);
  }, [sliderOpen]);
  // const windowWidth = window.innerWidth;
  // console.log(windowWidth)
  return (
    <header>
      <nav className="navbar">
        <div className={`navbar-logo`}>
          <a href="# ">
            {" "}
            <img
              src="https://devplus.edu.vn/assets/images/Artboard_2.png"
              alt="website logo"
            />
          </a>
        </div>
        <div className={`navbar-links ${menuOpen ? "navbar-open" : ""}`}>
          <li className="navbar-link">
            <Link className="navbar-link-title" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-link">
            <Link className="navbar-link-title" to="/about-dev">
              About devplus
            </Link>
          </li>
          <li className="navbar-link">
            <div className="link">
              <div className="title">
                <p>Web Design</p>
              </div>
              <div className="submenu-open-btn" onClick={submenuToggle}>
                <FaAngleDown />
              </div>
            </div>

            <ul className={`submenu ${submenuOpen ? "submenu-open" : ""}`}>
              <li>
                <Link to="/one-plus-campus">One Plus Campus</Link>
              </li>
              <li>
                <Link to="/two-plus-campus">Two Plus Campus</Link>
              </li>
              <li>
                <a href="# ">Three Plus Campus</a>
              </li>
              <div className="submenu-close-btn" onClick={submenuToggle}>
                <MdClose /> Close
              </div>
            </ul>
          </li>
          <li className="navbar-link">
            <Link className="navbar-link-title" to="/dev-activities">
              Devplus Activities
            </Link>
          </li>
        </div>

        <div
          className={`navbar-icons ${menuOpen ? "open" : ""}`}
          onClick={menuToggle}
        >
          <div className="navbar-icon"></div>
        </div>
      </nav>
      <Sidebar
        sideBarOpen={sideBarOpen}
        sideBarToggle={menuToggle}
        sliderToggle={sliderToggle}
      />
      <SliderShow
        sliderOpen={sliderOpen}
        sliderToggle={sliderToggle}
      ></SliderShow>
    </header>
  );
};
export default Navbar;
