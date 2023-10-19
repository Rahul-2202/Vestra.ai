import React from "react";
import "./contents.css";
import {useState, useEffect} from "react";
const Contents = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can customize the message displayed in the pop-up here.
    if (email) {
      setShowPopup(true);
      setEmail("");
    }
  };

  useEffect(() => {
    if (showPopup) {
      const popupTimer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      return () => {
        clearTimeout(popupTimer);
      };
    }
  }, [showPopup]);
  return (
    <div className="content">
      <div className="head">
        <p class="gradient-button">Coming Soon</p>
        <p className="p1">VESTRA</p>
        <p className="p2">Intelligent Characters. Crafted just for YOU </p>
        <div className="p3-cont">
          <p className="p3">
            Experience AI that truly understands you. Personalized, proactive,
            and profoundly Indian. Launching soon, signup for updates and be
            among the first to experience Vestra
          </p>
        </div>
      </div>
      <div className="notify">
        <p className="get-notify">Get Notified</p>
        <div className="container-notify">
          <input
            className="notify-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button onClick={handleSubmit} className="notify-button">
            Get Updates
          </button>
        </div>
        {showPopup && (
          <div
            style={{
              width: "660px",
              backgroundColor: "transparent", // Shading color
              // border: "1px solid #ddd",
              // borderRadius: "10px", // Rounded corners
              padding: "1px 0 0 0",
              margin: "10px 0 0 0",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "9999px",
              boxShadow: "0 10px 30px 0px hsla(0, 0%, 92%, 0.4) inset",
              fontSize: "16px"
            }}
          >
            <p
              style={{
                paddingLeft: "50px",
                fontSize: "20px"
              }}
            >
              Thanks for joining us , will keep you posted for updates.
            </p>

            <span
              style={{
                float: "right",
                cursor: "pointer",
                paddingRight: "50px",
                fontSize: "26px"
              }}
              onClick={() => setShowPopup(false)}
            >
              &times;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contents;
