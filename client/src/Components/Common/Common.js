import "./Common.css";
import { FiBellOff, FiBell } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import Iframe from "react-iframe";
import { useState, useEffect } from "react";
import axios from "axios";

function Common() {
  const [selected, setSelected] = useState(null);
  const [poped, setPoped] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const openPopup = () => {
    if (poped === 1) {
      return setPoped(null);
    }
    setPoped(1);
  };
  const [commonData, setCommonData] = useState({});
  const getData = async () => {
    await axios
      .get("/api/admin/common/infoAll")
      .then((res) => {
        setCommonData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="concern">
      <div className="common-side">
        <div className="common-container">
          <div className="faq-side">
            <div className="faq-title">
              <h2 className="text-part">{commonData.title}</h2>
            </div>
            <div className="faq-content">
              <div className="accordition">
                {commonData.concerns?.map((item, i) => (
                  <div className="accordion-item" key={i}>
                    <button
                      className={
                        selected === i
                          ? "accordion-header active"
                          : "accordion-header"
                      }
                      onClick={() => toggle(i)}
                    >
                      {selected === i ? (
                        <FiBellOff className="fa"></FiBellOff>
                      ) : (
                        <FiBell className="fa"></FiBell>
                      )}

                      {item.content}
                    </button>
                    <div
                      className={
                        selected === i
                          ? `answer-show active item${i}`
                          : "answer-show"
                      }
                    >
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Video Area */}
          <div className="video-side">
            <div className="img-part">
              <div className="popup-videos" onClick={() => openPopup()}>
                <FaPlay className="i fa fa-play"></FaPlay>
              </div>
            </div>
          </div>
        </div>
      </div>
      {poped === 1 ? (
        <div className="popup-video" onClick={() => openPopup()}>
          <div className="close-span" onClick={() => openPopup()}>
            &times;
          </div>
          <Iframe
            className="mfp-iframe"
            frameBorder={0}
            url={commonData.video}
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
export default Common;
