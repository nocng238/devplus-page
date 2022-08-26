import React, { useState, useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import "./Sidebar.css";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sidebar = ({ sideBarOpen, sideBarToggle, sliderToggle }) => {
  const [sidebar, setSidebar] = useState({});
  const getData = async () => {
    await axios
      .get("/api/admin/sidebar/info")
      .then((res) => {
        setSidebar(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`side-bar ${sideBarOpen ? "side-bar-open" : ""}`}>
      <div className="close-button" onClick={sideBarToggle}>
        <MdClose className="icon" />
      </div>

      <div className="side-bar-logo">
        <img src={sidebar.logo} alt="website logo" />
      </div>

      <div className="description">
        <span>{sidebar.text}</span>
      </div>

      <div className="sidebar-images">
        {sidebar.images?.map((image, index) => {
          return (
            <div
              className="image"
              key={index}
              onClick={() => sliderToggle(index)}
            >
              <img src={image.url} alt="" />
            </div>
          );
        })}
      </div>
      <div className="map">
        <img src={sidebar.map} alt="" />
      </div>

      <div className="facebook">
        <a href="https://www.facebook.com/Devplusprogramme">
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
