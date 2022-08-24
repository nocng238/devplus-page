import "./Receive.css";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Receive = () => {
  const [receiveData, setReceiveData] = useState([]);
  const getData = async () => {
    await axios
      .get("https://api-devplus.herokuapp.com/api/receive")
      .then((res) => {
        setReceiveData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  const { ref: receiveRef, inView: receiveVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="receive" ref={receiveRef}>
      <div className="content-title">
        <div className="content-list">
          <div className="list-heading">
            <h2>What an engineer after Devplus will must have?</h2>
          </div>
          <div className="list-container">
            {receiveData.map((receive, index) => (
              <div
                className={`list-row ${receiveVisible ? "fade-up" : ""}`}
                key={index}
              >
                <div className="list-item">
                  <div className="list-icon">
                    <img src={receive.img} alt="img" />
                  </div>
                  <div className="list-text">
                    <h4>{receive.title}</h4>
                    <span>{receive.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Receive;
