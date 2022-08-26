import "./Review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Review() {
  const settings = {
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    responsive: [
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const [reviewnData, setReviewData] = useState([]);
  const getData = async () => {
    await axios
      .get("/api/admin/review/infoAll")
      .then((res) => {
        setReviewData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="review">
      <div className="review-container">
        <div className="carousel-title">
          <h2>What alumni saying</h2>
        </div>
        <Slider {...settings}>
          {reviewnData.map((item, index) => (
            <div className="card" key={index}>
              <div className="rv-content">
                <div className="author-desc">
                  <div className="rv-desc">
                    <img
                      className="quote"
                      src="https://devplus.asia/assets/images/testimonial/style5/quote2.png"
                      alt=""
                    />
                    {item.title}
                  </div>
                  <div className="desc-img">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="rv-details">
                  <div className="rv-name">{item.author}</div>
                  <div className="rv-job">{item.job}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Review;
