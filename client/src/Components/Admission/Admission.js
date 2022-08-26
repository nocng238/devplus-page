import "./Admission.css";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Admission = () => {
  const [admissionData, setAdminssionData] = useState({});
  const getData = async () => {
    await axios
      .get("http://dev-page-server.herokuapp.com/api/admin/admission/info")
      .then((res) => {
        setAdminssionData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const { ref: admissionRef, inView: admissionVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="admission" ref={admissionRef}>
      <div className="admission-container">
        <div className="img-admission">
          <img src={admissionData.image} alt="" />
        </div>
        <div
          className={`content-admission ${admissionVisible ? "fade-up" : ""}`}
        >
          <p id="title-admission">Admission for 2021</p>
          <p id="text-admission">{admissionData.detail}</p>
          <button className="button" href="">
            <span id="button-admission">APPLY NOW</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Admission;
