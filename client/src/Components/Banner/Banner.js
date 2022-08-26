import React from "react";
import "./Banner.css";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import axios from "axios";
const Banner = () => {
  const [bannerData, setBannerData] = useState({});
  const getData = async () => {
    await axios
      .get("/api/admin/banner/info")
      .then((res) => {
        setBannerData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  const { ref: bannerRef, inView: bannerVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <section ref={bannerRef} id="banner">
      <div className="container">
        <div className="banner-img">
          <img src={bannerData.image} alt="" />
        </div>
        <div className="banner-body">
          <h1 className={`${bannerVisible ? "fade-left" : ""}`}>
            {bannerData.title}
          </h1>
          <p className={`${bannerVisible ? "fade-right" : ""}`}>
            {bannerData.detail}
          </p>
          <a href="# ">
            <button className={`banner-btn ${bannerVisible ? "fade-up" : ""}`}>
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Banner;
