import React from "react";
//import styles as CSS Modules for the reusable compenent
import styles from "./FormInput.module.css";

function FormInput(props) {
  const { name, id, errors, value, type, placeholder, onChange, label } = props;
  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        {label} <span className={styles.requiredStar}>*</span>
      </label>
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

export default FormInput;
