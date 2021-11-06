import React from "react";
import styles from "./CustomInput.module.css";

function CustomInput(props) {
  const { name, id, errors, value, type, placeholder, onChange, label } = props;

  return (
    <div className={styles.container}>
      {/* <label className={styles.label}>{name}</label> */}
      <input
        className={styles.inputField}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        autoComplete="off"
      />
      {errors ? <span className="message">{errors}</span> : ""}
    </div>
  );
}

export default CustomInput;
