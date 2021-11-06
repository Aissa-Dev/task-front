import React, { useState, useEffect } from "react";
import CustomButton from "./customButton/CustomButton";
import CustomInput from "./customInput/CustomInput";
import { validate } from "./dataValidation";
import "./FormSubscription.css";

function FormSubscription() {
  const initValues = { name: "", company: "", email: "", accept: false };
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initValues);
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [flipped, setFlipped] = useState("");

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit && isChecked) {
      console.log("thank you");
      setFlipped("flipped");
    }
  }, [formErrors]);

  //update form values
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // check and submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  //Reseting input values and errors messages
  const handleReset = (e) => {
    e.preventDefault();
    setFormErrors({});
    setFormValues(initValues);
    setIsChecked(false);
  };

  // Array of our inputs contains all informations for the Costum input
  const inputsItems = [
    {
      id: "name",
      name: "name",
      label: "name",
      type: "text",
      placeholder: "Name",
      value: formValues.name,
      errors: formErrors.name,
      onChange: handleChange
    },
    {
      id: "company",
      name: "company",
      label: "Company",
      type: "text",
      placeholder: "company",
      value: formValues.company,
      errors: formErrors.company,
      onChange: handleChange
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "email",
      value: formValues.email,
      errors: formErrors.email,
      onChange: handleChange
    }
  ];

  return (
    <form className={flipped}>
      <span className="title">
        Subscribe to our <span> NewsLetter</span>
      </span>
      <div className="inputsSection">
        {inputsItems.map((input) => (
          <CustomInput {...input} key={input.id} />
        ))}

        <div className="checkbox-container">
          <div>
            <input
              className="chk"
              type="checkbox"
              checked={isChecked}
              name="accept"
              onChange={() => {
                setIsChecked(!isChecked);
                setFormValues({ ...formValues, accept: !isChecked });
              }}
            />
            <p>Agree to subscribe</p>
          </div>
          {formErrors.accept ? (
            <p className="message">{formErrors.accept}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="btns">
        <CustomButton action={handleReset} title="reset" />

        <CustomButton action={handleSubmit} title="Submit" />
      </div>
    </form>
  );
}

export default FormSubscription;
