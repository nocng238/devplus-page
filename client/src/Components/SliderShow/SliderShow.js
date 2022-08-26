import "./SliderShow.css";
import Slider from "react-slick";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

function SliderShow({ sliderOpen, sliderToggle, initSlide }) {
  const [sidebar, setSidebar] = useState({});
  const ref = useRef();

  const getData = async () => {
    await axios
      .get("http://dev-page-server.herokuapp.com/api/admin/sidebar/info/")
      .then((res) => {
        setSidebar(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    ref.current.slickGoTo(initSlide);
  }, [initSlide]);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className={sliderOpen ? "slider" : "slider off"}>
      <div
        className="slider-back-quit"
        onClick={() => sliderToggle("off")}
      ></div>
      <div className="slider-container">
        <Slider ref={ref} {...settings}>
          {Array.isArray(sidebar.images) ? (
            sidebar.images.map((item, index) => (
              <div className="slider-card" key={index}>
                <img src={item.url} alt=""></img>
              </div>
            ))
          ) : (
            <></>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default SliderShow;
