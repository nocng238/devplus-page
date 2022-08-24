import React from "react";
import "./Campus.css";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function Campus() {
  const [campusData, setCampusData] = useState([]);
  const getData = async () => {
    await axios
      .get("https://api-devplus.herokuapp.com/api/receive")
      .then((res) => {
        setCampusData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const { ref: campusRef, inView: campusVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="our-campus" ref={campusRef}>
      <div className="content-campus">
        <div className="campus-container">
          <div className="campus-heading">
            <h2>Our main campus</h2>
          </div>
          <div className="campus-row">
            {campusData.map((title, index) => (
              <div
                className={`campus-cover ${campusVisible ? "fade-up" : ""}`}
                key={index}
              >
                <div className="campus-size">
                  <div className="campus-img">
                    <img src={title.img} alt="one plus" />
                  </div>
                  <div className="campus-title">
                    <h3>{title.item}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Campus;
