import React from "react";
import "./Welcome.css";
import welcomeImg from "../../images/welcome.svg";
import closeIcon from "../../images/close-icon.svg";

function Welcome({ setWelcomeModalOpen }) {
  return (
    <div className="welcome">
      <div className="close">
        <button onClick={() => setWelcomeModalOpen(false)}>
          <img src={closeIcon} alt="" />
        </button>
      </div>

      <div className="content">
        <div>
          <h1>Success</h1>
          <img src={welcomeImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
//&times;
