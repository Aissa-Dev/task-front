import React from "react";
import styles from "./CustomButton.module.css";
function CostumButton({ title, action }) {
  return (
    <button className={styles.button} onClick={action}>
      {title}
    </button>
  );
}

export default CostumButton;
