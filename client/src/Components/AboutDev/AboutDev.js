import "./AboutDev.css";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import axios from "axios";
const AboutDev = () => {
  const [aboutData, setAboutData] = useState({});
  const getData = async () => {
    await axios
      .get("http://dev-page-server.herokuapp.com/api/admin/about/info")
      .then((res) => {
        setAboutData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const { ref: aboutRef, inView: aboutVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="container-hero hero" ref={aboutRef}>
      <div className="hero">
        <div className="hero-right">
          <h4 className={`ti ${aboutVisible ? "fade-up" : ""}`}>
            Road to be a devplus
          </h4>
          <ul className="part">
            {aboutData.items?.map((items, index) => (
              <li className={`${aboutVisible ? "fade-up" : ""}`} key={index}>
                <div className="num">
                  <span>{index + 1}</span>
                </div>
                <div className="content">{items.item}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className={`hero-left ${aboutVisible ? "fade-up" : ""}`}>
          <div className="author">ABOUT DEVPLUS</div>
          <h2 className="title-about">{aboutData.title}</h2>
          <div className="text">{aboutData.content}</div>
        </div>
      </div>
    </div>
  );
};
export default AboutDev;
