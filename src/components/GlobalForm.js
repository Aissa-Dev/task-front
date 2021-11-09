import React, { useState } from "react";
import FormSubscription from "./formSubscription/FormSubscription";
import Welcome from "./welcomeComponent/Welcome";
import emailSvg from "../images/email.svg";

function GlobalForm() {
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);
  return (
    <div className="container">
      <div className="leftSection">
        {!welcomeModalOpen ? (
          <FormSubscription setWelcomeModalOpen={setWelcomeModalOpen} />
        ) : (
          <Welcome setWelcomeModalOpen={setWelcomeModalOpen} />
        )}
      </div>
      <div className="rightSection">
        <img src={emailSvg} alt="email-svg" />
      </div>
    </div>
  );
}

export default GlobalForm;
