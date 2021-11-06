import React from "react";
import styles from "./CustomButton.module.css";
function CostumButton({ title, action }) {
  return (
    <div className={styles.button} onClick={action}>
      {title}
    </div>
  );
}

export default CostumButton;
