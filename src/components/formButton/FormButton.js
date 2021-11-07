import React from "react";
//import styles as CSS Modules for the reusable compenent
import styles from "./FormButton.module.css";
function FormButton({ title, action, type }) {
  return (
    <button className={styles.button} onClick={action} type={type}>
      {title}
    </button>
  );
}

export default FormButton;
