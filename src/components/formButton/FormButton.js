import React from "react";
//import styles as CSS Modules for the reusable compenent
import styles from "./FormButton.module.css";
function FormButton(props) {
  const { title, action, type, disableButton } = props;
  return (
    <button
      className={styles.button}
      onClick={action}
      type={type}
      disabled={disableButton}
    >
      {title}
    </button>
  );
}

export default FormButton;
